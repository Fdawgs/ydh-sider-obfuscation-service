require("custom-env").env();

const envSchema = require("env-schema");
const S = require("fluent-json-schema");
const fs = require("fs").promises;
const pino = require("pino");
const rotatingLogStream = require("file-stream-rotator");

/**
 * @author Frazer Smith
 * @author Colm Harte
 * @author Jack Murdoch
 * @description Convert string boolean to boolean.
 * @param {string} param - CORS parameter.
 * @returns {string|boolean} CORS parameter.
 */
function parseCorsParameter(param) {
	if (param === "true") {
		return true;
	}
	if (param === "false") {
		return false;
	}
	return param;
}

/**
 * @author Frazer Smith
 * @description Validate environment variables and build server config.
 * @returns {object} Server config.
 */
async function getConfig() {
	// Validate env variables
	const env = envSchema({
		dotenv: true,
		schema: S.object()
			.prop("SERVICE_HOST", S.string())
			.prop("SERVICE_PORT", S.number())
			.prop("SERVICE_REDIRECT_URL", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_PFX_PASSPHRASE", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_PFX_FILE_PATH", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_SSL_CERT_PATH", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_SSL_KEY_PATH", S.anyOf([S.string(), S.null()]))
			.prop("CORS_ORIGIN", S.string().default("false"))
			.prop(
				"LOG_LEVEL",
				S.string()
					.enum([
						"fatal",
						"error",
						"warn",
						"info",
						"debug",
						"trace",
						"silent",
					])
					.default("info")
			)
			.prop("LOG_ROTATION_DATE_FORMAT", S.string().default("YYYY-MM-DD"))
			.prop(
				"LOG_ROTATION_FILENAME",
				S.string().default(
					`${process.cwd()}/logs/obs-service-%DATE%.log`
				)
			)
			.prop(
				"LOG_ROTATION_FREQUENCY",
				S.string().enum(["custom", "daily", "test"]).default("daily")
			)
			.prop("LOG_ROTATION_MAX_LOGS", S.anyOf([S.string(), S.null()]))
			.prop("LOG_ROTATION_MAX_SIZE", S.anyOf([S.string(), S.null()]))
			.prop("KC_ENABLED", S.boolean().default(false))
			.prop("KC_REQUESTTOKEN_URL", S.anyOf([S.string(), S.null()]))
			.prop("KC_REQUESTTOKEN_AUDIENCE", S.anyOf([S.string(), S.null()]))
			.prop("KC_REQUESTTOKEN_CLIENT_ID", S.anyOf([S.string(), S.null()]))
			.prop(
				"KC_REQUESTTOKEN_CLIENT_SECRET",
				S.anyOf([S.string(), S.null()])
			)
			.prop("KC_REQUESTTOKEN_GRANT_TYPE", S.anyOf([S.string(), S.null()]))
			.prop(
				"KC_REQUESTTOKEN_REQUESTED_TOKEN_TYPE",
				S.anyOf([S.string(), S.null()])
			)
			.prop("KC_SERVICEAUTH_URL", S.anyOf([S.string(), S.null()]))
			.prop("KC_SERVICEAUTH_CLIENT_ID", S.anyOf([S.string(), S.null()]))
			.prop(
				"KC_SERVICEAUTH_CLIENT_SECRET",
				S.anyOf([S.string(), S.null()])
			)
			.prop("KC_SERVICEAUTH_GRANT_TYPE", S.anyOf([S.string(), S.null()]))
			.prop("KC_SERVICEAUTH_PASSWORD", S.anyOf([S.string(), S.null()]))
			.prop("KC_SERVICEAUTH_USERNAME", S.anyOf([S.string(), S.null()]))
			.prop("OBFUSCATION_KEY_NAME", S.string())
			.prop("OBFUSCATION_KEY_VALUE", S.string())
			.prop("OBFUSCATION_QUERYSTRING_KEY_ARRAY", S.string()),
	});

	const config = {
		fastify: {
			host: env.SERVICE_HOST,
			port: env.SERVICE_PORT,
		},
		fastifyInit: {
			/**
			 * See https://www.fastify.io/docs/v3.8.x/Logging/
			 * and https://getpino.io/#/docs/api for logger options
			 */
			logger: {
				formatters: {
					level(label) {
						return { level: label };
					},
				},
				level: env.LOG_LEVEL,
				serializers: {
					req(req) {
						return pino.stdSerializers.req(req);
					},
					res(res) {
						return pino.stdSerializers.res(res);
					},
				},
				timestamp: () => pino.stdTimeFunctions.isoTime(),
				// Rotation options: https://github.com/rogerc/file-stream-rotator/#options
				stream: rotatingLogStream.getStream({
					date_format: env.LOG_ROTATION_DATE_FORMAT,
					filename: env.LOG_ROTATION_FILENAME,
					frequency: env.LOG_ROTATION_FREQUENCY,
					max_logs: env.LOG_ROTATION_MAX_LOG,
					size: env.LOG_ROTATION_MAX_SIZE,
					verbose: false,
				}),
			},
		},
		cors: {
			origin: parseCorsParameter(env.CORS_ORIGIN),
			methods: ["Accept"],
			allowedHeaders: ["GET", "OPTIONS"],
		},
		redirectUrl: env.SERVICE_REDIRECT_URL,
		// Values used by keycloak-access-token plugin in wildcard service
		keycloak: {
			enabled: env.KC_ENABLED,
			// Request access token for user
			requestToken: {
				form: {
					audience: env.KC_REQUESTTOKEN_AUDIENCE,
					client_id: env.KC_REQUESTTOKEN_CLIENT_ID,
					client_secret: env.KC_REQUESTTOKEN_CLIENT_SECRET,
					grant_type: env.KC_REQUESTTOKEN_GRANT_TYPE,
					requested_subject: undefined,
					requested_token_type:
						env.KC_REQUESTTOKEN_REQUESTED_TOKEN_TYPE,
				},
				url: env.KC_REQUESTTOKEN_URL,
			},
			// Service authorisation to retrieve subject access token
			serviceAuthorisation: {
				form: {
					client_id: env.KC_SERVICEAUTH_CLIENT_ID,
					client_secret: env.KC_SERVICEAUTH_CLIENT_SECRET,
					grant_type: env.KC_SERVICEAUTH_GRANT_TYPE,
					password: env.KC_SERVICEAUTH_PASSWORD,
					username: env.KC_SERVICEAUTH_USERNAME,
				},
				url: env.KC_SERVICEAUTH_URL,
			},
		},
		// Values used by obfuscate-query-string plugin
		obfuscation: {
			encryptionKey: {
				name: env.OBFUSCATION_KEY_NAME,
				value: env.OBFUSCATION_KEY_VALUE,
			},
			obfuscate: JSON.parse(env.OBFUSCATION_QUERYSTRING_KEY_ARRAY),
		},
	};

	// Enable HTTPS using cert/key or passphrase/pfx combinations
	if (
		fs.access(env.HTTPS_SSL_CERT_PATH) &&
		fs.access(env.HTTPS_SSL_KEY_PATH)
	) {
		config.fastify.https = {
			cert: await fs.readFile(env.HTTPS_SSL_CERT_PATH),
			key: await fs.readFile(env.HTTPS_SSL_KEY_PATH),
		};
	}

	if (env.HTTPS_PFX_PASSPHRASE && fs.access(env.HTTPS_PFX_FILE_PATH)) {
		config.fastify.https = {
			passphrase: env.HTTPS_PFX_PASSPHRASE,
			pfx: await fs.readFile(env.HTTPS_PFX_FILE_PATH),
		};
	}

	return config;
}

module.exports = getConfig;