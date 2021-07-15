# Changelog

All notable changes to this project will be documented in this file.

## [4.1.0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.13...v4.1.0) (2021-07-15)


### Features

* **server:** add content-encoding support ([c51cfad](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c51cfad5eff2c2344872f372b6b55e1c279a5a12))


### Bug Fixes

* **package:** move `pino-pretty` to production dependency list ([#335](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/335)) ([17c80db](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/17c80dbad37b4bce6a1ea87fa89ceb6f1d116ee0))
* **server:** ensure doc route also inherits plugins ([a8fabb5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a8fabb59681eff8d92c40a6e03f9a01fa7d0093e))
* **server:** revert Referrer-Policy directives to "no-referrer" only ([f0e6adb](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f0e6adb2f92c5226961bd8a707772ff5f2837965))


### Improvements

* **routes/healthcheck:** move `Accept` header handling back to hook ([7ec00a6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7ec00a6c8f725a68b482a85c52a17ce5a3ee05af))
* **routes/redirect:** move `Accept` header handling back into hook ([97ab3b8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/97ab3b8edf895a34fd4701bffaf94a2ea94d427a))
* **routes:** do not treat routes as plugins ([20b93bb](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/20b93bb7f97e4f8a597168b4dbafabd0e9ebcb36))


### Miscellaneous

* change mentions of "MIME type" to "media type" ([#327](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/327)) ([0c2f166](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0c2f1663ade6c3db865630fd7cf11ea7177523d9))
* **env.template:** use double quotes ([#334](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/334)) ([79f7b71](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/79f7b71399f5685e4577678260a54ff6157180fa))
* **server:** sort plugin registering alphabetically ascending ([14390c9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/14390c9395ff5a09a56ee6f4d90461110422d4e1))
* **server:** update encapsulation comment ([783f640](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/783f640fbd4684ee0d2898b1878ca5734967e362))
* **test_resources:** add Insomnia REST client test requests ([fee4b9e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fee4b9e28bafe61559798a09c5059ef252d2d8fe))
* update plugin metadata for server dependency graph ([1087dba](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1087dbaecd6ce461bfc686fd3ac6386f5f05da8a))

### [4.0.13](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.12...v4.0.13) (2021-07-12)


### Bug Fixes

* **routes:** `Accept` header handling encapsulation ([#319](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/319)) ([656c0bf](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/656c0bf6a93e9ba4187633b732aa38ab6534ba84))


### Miscellaneous

* **vscode:** remove user space config setting ([50908c8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/50908c8fb47fc29ab6ab4a3babc4c155fc143856))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.2 to 35.4.3 ([1f2af98](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1f2af981f271c160aabfaefa60fb7825d07b7c51))
* **deps-dev:** bump nodemon from 2.0.10 to 2.0.12 ([0aa0606](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0aa0606ea90ed4d8d890fbf115850e6286a332c6))
* **deps:** bump env-schema from 3.0.1 to 3.1.0 ([4c304be](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4c304bef464f64feae837c7f7f20023d079e9aa7))
* **deps:** bump fastify-swagger from 4.8.2 to 4.8.3 ([77e4c01](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/77e4c016b7a5d9a11e067dfa5cad78ee70496404))
* **deps:** bump fluent-json-schema from 3.0.0 to 3.0.1 ([74ba0af](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/74ba0afff9e753aadc4a445b6de4d5cf1fbbba88))
* **deps:** bump pino from 6.11.3 to 6.12.0 ([167dcc1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/167dcc10fcd9ce0a5f088fe1013e314f4020f687))

### [4.0.12](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.11...v4.0.12) (2021-07-09)


### Bug Fixes

* **routes/healthcheck:** add `Accept` request header handling ([#317](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/317)) ([d2f1e8d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d2f1e8d74043a952b41f969a6f3e1578008381b2))


### Miscellaneous

* **vscode:** disable redhat telemetry ([1015060](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/10150602b450d36c1c15828803cacce863922ec6))


### Dependencies

* **deps-dev:** bump autocannon from 7.3.0 to 7.4.0 ([ae63629](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ae63629393fc5f52e69ec0d713a582a7bc7ed0fa))
* **deps-dev:** bump eslint from 7.29.0 to 7.30.0 ([9ef5c32](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9ef5c328090e8899da2b17541c6d8683687aef4c))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.0 to 35.4.1 ([44f3cbe](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/44f3cbe246a9f5258a586f215ccd95491b7dba30))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.1 to 35.4.2 ([c7aa266](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c7aa266b4a3eaa8e4d7fb75385d7a62ef5e1a0d7))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([40f7419](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/40f7419d3c59f639bf8af9577dbe9c0522e3ef89))
* **deps-dev:** bump husky from 7.0.0 to 7.0.1 ([e42ead7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e42ead7186ad75a8309b1228e1a8cb6c1972289f))
* **deps-dev:** bump jest from 27.0.5 to 27.0.6 ([a75782d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a75782dca077e3ef8b1eedb42306bf45dff967a9))
* **deps-dev:** bump nodemon from 2.0.7 to 2.0.9 ([c3d39cd](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c3d39cd47f9e11d0343cf743a74412ddb64ba73f))
* **deps-dev:** bump nodemon from 2.0.9 to 2.0.10 ([880a0d5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/880a0d5a57dfc8724cdaf76b5de1fcc621d9c462))
* **deps-dev:** bump pino-pretty from 5.0.2 to 5.1.0 ([2e271e7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2e271e74706bfc8b19cdaff641dff3c89118f0ef))
* **deps-dev:** bump pino-pretty from 5.1.0 to 5.1.1 ([c48bf91](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c48bf91b2cbaec5dadaaa69b0bf7f3093d5dba00))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([81e6fc7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/81e6fc7ad392130f3336033183b0ca915a8c6e27))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([0e35368](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0e35368246dc3db77e5b87a3d008a99cfa6d6286))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([daeca4d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/daeca4d35ec62de70fbdb7d31c7ab3a7a699d6a1))
* **deps:** bump fastify from 3.18.0 to 3.18.1 ([28262b2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/28262b2182db65158b3b839b549d1e1730af4324))
* **deps:** bump fastify from 3.18.1 to 3.19.0 ([6d44d66](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6d44d66fb6bee4e2364aa181001405fa583cc6ca))
* **deps:** bump fastify-helmet from 5.3.1 to 5.3.2 ([23bd6dc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/23bd6dc37a726b2a11e90950654908e66494813a))
* **deps:** bump fastify-swagger from 4.8.0 to 4.8.2 ([9a4f532](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9a4f53297e7e06ab9d4e1eb06d62d9c26521250f))
* **deps:** bump obfuscated-querystring from `25016a8` to `69d5602` ([49bc2b2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/49bc2b24a9194816c5a2ebcc60fb3e67df883d28))

### [4.0.11](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.10...v4.0.11) (2021-06-22)


### Bug Fixes

* **server:** increase `Strict-Transport-Security` max age to 365 days ([6c191d6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6c191d61284cc6c7fa3f365d2c0cde0c8b174570))
* **server:** move hsts value to correct object ([#290](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/290)) ([610b295](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/610b295fa1a08aa3d026d6acf7a6c4fc6c9c1bd3))
* **server:** use stricter `Content-Security-Policy` values ([47b616b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/47b616bdc503bd351f0bf36baa0e493abdb27fa9))


### Continuous Integration

* **link-check:** reduce frequency from weekly to monthly ([#287](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/287)) ([24063b1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/24063b12838bacb4f680386f4b75a1c0bf5b0d67))


### Miscellaneous

* **server:** clarify on what each registered plugin does ([064a054](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/064a054c7ddd65314e7375598bdc53c754043fe3))


### Dependencies

* **deps-dev:** bump eslint from 7.28.0 to 7.29.0 ([4582d29](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4582d29c2f31a49137c5898d80dcec33a9ea2ae0))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.3.0 to 35.4.0 ([7ec008b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7ec008bb2b8ba9b7dcee95f7bad60fe7301d494f))
* **deps-dev:** bump jest from 27.0.4 to 27.0.5 ([b29a69a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b29a69a7ef56932c2c43474c136a56fb88d4b27f))
* **deps:** bump fastify-autoload from 3.7.1 to 3.8.0 ([5c317bb](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5c317bb7ff80643e94fcea09831f7119477a7ed7))
* **deps:** bump fastify-swagger from 4.7.0 to 4.8.0 ([54440f6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/54440f698e685834c1035e1b29f6f0abdd59fe89))
* **deps:** bump under-pressure from 5.6.0 to 5.7.0 ([824446a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/824446ac10d0d1acd8e53e1bddf4909b955f6c12))

### [4.0.10](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.9...v4.0.10) (2021-06-17)


### Dependencies

* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([cd762f5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cd762f5f689fdc43736aaf370d86438a07bca76f))
* **deps:** bump fastify from 3.17.0 to 3.18.0 ([77e054a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/77e054aa616c35d846203c1f08eb66409e0f2381))
* **deps:** bump fastify-disablecache from 2.0.1 to 2.0.2 ([0e5e6a2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0e5e6a2d7082d841e14032bfe8b3b61d07bacfb3))

### [4.0.9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.8...v4.0.9) (2021-06-16)


### Bug Fixes

* **config:** `isProduction` and `prettyPrint` conditionals ([e95ead3](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e95ead387c3ddb722b047eaf4596fff7497ec20f))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 35.1.3 to 35.3.0 ([8223c56](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8223c5647884b52a0a1af13e361dea692e859198))
* **deps:** bump fastify-disablecache from 2.0.0 to 2.0.1 ([cdd4053](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cdd405356c3b072483bf5be1dd9eef523998a4f1))

### [4.0.8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.7...v4.0.8) (2021-06-09)


### Dependencies

* **deps:** fix `js-yaml` dependency tree ([#277](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/277)) ([2472402](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/24724022c3aa39ed4dddca6f9a1a9a48fdba739e))

### [4.0.7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.6...v4.0.7) (2021-06-09)


### Bug Fixes

* **server:** remove swagger from csp for all routes apart from doc route ([cdefa1c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cdefa1c662d9c54d4a3b3aaa995a374c3181ce24))
* **server:** set `frame-ancestors` csp to `'none'`; add `child-src` csp ([1db1753](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1db17534e89c77cace607b1852355a5cdc5e3fd2))


### Dependencies

* **deps-dev:** bump eslint from 7.27.0 to 7.28.0 ([f471c5c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f471c5cbb974f8eef9c16120e75f437540845b85))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.1.2 to 35.1.3 ([4f538b8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4f538b82db37c8ddb3cd640ce7efb840ec32b8a2))
* **deps-dev:** bump jest from 27.0.3 to 27.0.4 ([0c28799](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0c28799e24f5a571a6cf95398d04dca9ad5d2771))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([d258e44](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d258e4457597cdfea91ebff1b746d0c13ba13420))
* **deps:** bump glob-parent from 5.1.1 to 5.1.2 ([af45cdc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/af45cdc5202cc58900f75bc9386671f765ba56a4))
* **deps:** bump normalize-url from 4.5.0 to 4.5.1 ([4ffd8f1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4ffd8f1ce1d094f35bdc3c7cf81b50145b01f62a))
* **deps:** bump trim-newlines from 3.0.0 to 3.0.1 ([98128f6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/98128f6b24624db7cbec45479151865710c57823))
* **deps:** fix package-lock.json ([73419cb](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/73419cba8c25e9c359072f9681e1871db5096ff9))

### [4.0.6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.5...v4.0.6) (2021-06-02)


### Bug Fixes

* **env:** missing comment `#` ([3197583](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3197583376422377288f419f73493f221cd6759f))


### Documentation

* **readme:** add note regarding using `docker compose up` ([c0ea538](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c0ea538d7d03bb5b4c020628500c7dd4a3b89e06))
* **readme:** update contributing section ([6ded22e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6ded22e9be5ed8da66c290353db33e907e57eed8))


### Dependencies

* **deps:** bump node from 14-alpine3.13 to 16-alpine3.13 ([4e04042](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4e04042ea85f06c0f9f078f0701a23a8a4ec6702))
* **docker-compose:** use oci labels ([d91be52](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d91be52059cb0118b7a580765645d2e5a36f9a64))
* **docker:** add resource limit, restart policy, and healthcheck ([7c5ec67](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7c5ec6772e43bdc07f00a91ba547bcce91fb2e81))
* **docker:** remove redundant `mkdir` run ([f3a91f9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f3a91f904e8bdf2639a6405248d1a9c7ea39fbee))
* **docker:** revert docker image back to `lts-alpine` ([df5eb84](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/df5eb84fd60751d2df2911125281d2f87d435a19))
* **docker:** use docker's native daemon for logging and rotation ([778da0a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/778da0a89169067d8a217ca83d7d48587032e3c0))

### [4.0.5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.4...v4.0.5) (2021-06-01)


### Miscellaneous

* **dockerfile:** consolidate consecutive `run` instructions ([98bdbc4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/98bdbc4c9d1ddc6e9d231b91bef0646d3e387d46))


### Continuous Integration

* remove redundant docker build job ([2a54c46](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2a54c4622829a9acf0e624e06fe98331f0da8c83))


### Dependencies

* **deps-dev:** bump pino-pretty from 5.0.1 to 5.0.2 ([4fb0dc2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4fb0dc24407df51faed1201e19f72d85a900d041))
* **docker:** bump git from v2.24.4-r0 to v2.30.2-r0 ([5a0a2f2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5a0a2f2796617047f7a0dc34b017070816b32e63))
* **docker:** bump image from lts-alpine to 14-alpine.3.13 ([0f8e24c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0f8e24c63c0bc1cce7ba7f1973bf6780ff895085))

### [4.0.4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.3...v4.0.4) (2021-06-01)


### Continuous Integration

* add nodejs v16 to test matrix ([4ee0c16](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4ee0c168b8a018c4259bc82a81a782158abefabf))


### Dependencies

* **deps-dev:** bump eslint-plugin-import from 2.23.3 to 2.23.4 ([82bd38f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/82bd38fa442a6d1244bda496ef8f05801c1d4460))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.0.0 to 35.1.2 ([0644477](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/064447721a5d31fd46ebc0c11766454f837cb11a))
* **deps-dev:** bump jest from 27.0.1 to 27.0.3 ([17b621c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/17b621cc9ab11cb87a40d09be76828477ba59bf2))
* **deps-dev:** bump pino-pretty from 5.0.0 to 5.0.1 ([9e914fa](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9e914fa4ec129652f0ac1106b2ed222e48c59691))
* **deps:** bump actions/cache from 2.1.5 to 2.1.6 ([1a6fd20](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1a6fd2026a0b5aba57f8fbfdc70c167d4f634e7e))
* **deps:** bump fastify from 3.16.2 to 3.17.0 ([7cae0cd](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7cae0cdc16502d1a779bcf3e33bc7edfaebd7e94))
* **docker-compose:** update `container_name` ([5b14942](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5b14942a6258a5ca367c3cee3121070cf6c96670))
* **docker-compose:** use a volume to persist log files ([8942f2a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8942f2a58345f275aa19d5865ceb801b89d744bd))
* **dockerignore:** add test and dev files ([e6d228d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e6d228dcf258976da8a777b57ce1ad60fddf872e))
* **docker:** update workdir ([ba69d9c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ba69d9c6d924754456298fbceca0d65a9af2c3ad))


### Miscellaneous

* **.env.template:** remove comment re docker and log files ([08c0835](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/08c0835b3ac7a8c9152c5d55e7cf8f3d003337a3))
* **docker:** reorder instructions ([d40996a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d40996a502cca5a7b2887049f5193c4cac5e19f2))
* **prettierignore:** use shorter syntax ([a8c1e60](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a8c1e6010151bccf8569040c611b520a9d62906c))


### Documentation

* add images and videos ([78ed024](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/78ed024c6fe487d8fd9ed107663d0c4bb5c21a12))
* **readme:** reduce width of contextual link image ([e89abb1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e89abb150f0bcd2138942da6f8eb9032183fc02a))
* **readme:** update docker compose command ([e4f12fa](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e4f12faeda2c394c12ce3a0e70aba4ffc2c3dbb1))

### [4.0.3](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.2...v4.0.3) (2021-05-27)


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#234](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/234)) ([989ff0a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/989ff0af9da0526509c2cee7d1a53d2c60ae38e5))
* **dockerfile:** consolidate consecutive `run` instructions ([#236](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/236)) ([21ca8d5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/21ca8d57f90ac8d7db262fbc8be79d316c73008f))
* **env:** remove pre-filled process load env values in template ([#238](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/238)) ([f28ed3a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f28ed3ace018d1624429b50d425a086b0a5b65fb))
* **workflows:** remove `stale.yml` ([e7843d6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e7843d678be7c81a1ca237aad88788f94a119970))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([3b59b05](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3b59b05d589ead8346f46067cf87b2f8799deb9e))
* fix key usage in `action/setup-node` ([ce0d87d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ce0d87dd380457437b79c50743ae4dce7152f4d8))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.1.1 to 12.1.4 ([779499b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/779499be63779fa8c0b8b296d8de2b14c76b0d9b))
* **deps-dev:** bump @commitlint/config-conventional ([08773b2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/08773b2be8eaafe49450b6c9e0466cc45bdd8ddb))
* **deps-dev:** bump eslint from 7.26.0 to 7.27.0 ([50c4be4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/50c4be4c09be06200005044f0aac4e0f5c9c70bc))
* **deps-dev:** bump eslint-plugin-import from 2.22.1 to 2.23.3 ([cb92401](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cb9240160bfcf1a388275124f8dff026d213e3a3))
* **deps-dev:** bump eslint-plugin-jsdoc from 34.0.1 to 35.0.0 ([ada9fa4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ada9fa4d04997a89812b652f876dddc78823f80a))
* **deps-dev:** bump jest from 26.6.3 to 27.0.1 ([1d4a146](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1d4a1460362af3c32a4410b3b30ba23faa1b1222))
* **deps-dev:** bump pino-pretty from 4.8.0 to 5.0.0 ([d18e90b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d18e90b5f95ef64825c58a53bbd7c98b165377c3))
* **deps:** bump dotenv from 9.0.2 to 10.0.0 ([a6424aa](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a6424aaed92b2144e0e673ec210b0688131cafd2))
* **deps:** bump fastify from 3.15.1 to 3.16.2 ([d5eae2f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d5eae2fb771a0b9074a52040f804a29cbb581180))
* **deps:** bump wagoid/commitlint-github-action from 3.1.3 to 3.1.4 ([afed79a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/afed79a62e1dc91ae7ceb205aa590c1dff31eb6a))

### [4.0.2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.1...v4.0.2) (2021-05-11)


### Bug Fixes

* **config:** `LOG_LEVEL` env variable validation ([9ae173c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9ae173cc37643059ffa397e120e7a8d37b69b56d))


### Continuous Integration

* **link-check:** run once a week on monday ([713fc7d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/713fc7d1da29b68b192526b76543e17a948dd479))


### Dependencies

* **deps-dev:** bump autocannon from 7.2.0 to 7.3.0 ([0f948ae](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0f948aeae377613021a20317f1b99e83c8f1f197))
* **deps-dev:** bump eslint from 7.25.0 to 7.26.0 ([4112214](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/41122149088b777acd66148bebe776b80c252130))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.0.0 to 34.0.1 ([4e5d480](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4e5d480ac75ea03afc38c4785de4f6cc0a0a956b))
* **deps-dev:** bump glob from 7.1.6 to 7.1.7 ([22433ae](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/22433ae26c8f1ef5a0491713739605a4e559bd88))
* **deps-dev:** bump pino-pretty from 4.7.1 to 4.8.0 ([4633833](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/46338339b4e95b90d8fa9bb3cf55ecf1d8f86880))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([#232](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/232)) ([273bc22](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/273bc2204533e13f095834e377daefc0abfdc120))
* **deps:** bump brpaz/hadolint-action from v1.4.0 to v1.5.0 ([710cdc6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/710cdc652b2fbf71941d58dbee6c8dfb83d076dc))
* **deps:** bump dotenv from 8.2.0 to 9.0.2 ([a455ca5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a455ca53490bc15dc5b10b04eefda1b5372dcabe))
* **deps:** bump fastify-cors from 6.0.0 to 6.0.1 ([dacf473](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/dacf4737ccf246f6a1934e4b9649d0502f6edc64))
* **deps:** bump fastify-floc-off from 1.0.0 to 1.0.1 ([75df58b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/75df58b519dda3854b2bd03d7c59d3f13b0060eb))
* **deps:** bump fluent-json-schema from 2.0.4 to 3.0.0 ([2541c9e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2541c9e66a210bb3a07aab611d42964c20c0c53d))
* **deps:** bump GoogleCloudPlatform/release-please-action ([d480d0e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d480d0eacd50c7b98ddcbee171183fe38777fb06))
* **deps:** bump wagoid/commitlint-github-action from v3.1.0 to v3.1.3 ([5179a4f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5179a4f948c86ce77cc53069e66f9ee12a2d6c38))

### [4.0.1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v4.0.0...v4.0.1) (2021-05-04)


### Dependencies

* **deps:** bump fastify from 3.15.0 to 3.15.1 ([8456d63](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8456d63096dbec384750347f32dcd893b8cb38c7))
* **deps:** bump GoogleCloudPlatform/release-please-action ([5b2eb68](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5b2eb68b0adbcdbe52d1bc836fcefbc8277e2a15))


### Documentation

* **readme:** compress duplicate setup steps into a single section ([#217](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/217)) ([dd9ea26](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/dd9ea26a6353573431bfe55f28d05598d89636c1))

## [4.0.0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v3.0.0...v4.0.0) (2021-04-30)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Features

* **config:** allow for rate and process limits to be user configured ([1f4accb](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1f4accb6d4ddafa9e33cb45311f7445890af91f6))
* **server:** add process-load/503 handling ([2e42af5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2e42af529c9bfdb699df9b14d5f37418c01349ca))
* **server:** add rate limiter ([5f80fa8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5f80fa8c4f53f6fe328d7ccb19b5079f90cae66c))
* **server:** disable google floc support ([2e2f0a9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2e2f0a9477c91beb2f395819474d24cc86dfd9e6))


### Bug Fixes

* **routes:** hide options routes from swagger docs ([542c3ca](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/542c3ca4d69ca0ad68e4ded1afc0b87c31666a1d))


### Documentation

* grammar and readability fixes ([50c3df1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/50c3df1fe8985d3910c6ad8b6a7b8afb5ae3442c))


### Dependencies

* **deps-dev:** bump autocannon from 7.0.5 to 7.2.0 ([41d46e2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/41d46e28c653cc64ef5a3fc264e678181282db29))
* **deps-dev:** bump eslint from 7.23.0 to 7.25.0 ([6a749a8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6a749a84be87d98ac5c866b8de2fd7a38af1d34c))
* **deps-dev:** bump eslint-config-prettier from 8.1.0 to 8.3.0 ([95418d1](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/95418d17f68effa4c1a2d06ecd533f6158754199))
* **deps-dev:** bump eslint-plugin-jest from 24.3.4 to 24.3.6 ([53b6035](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/53b6035bd022676a5901f85b7cc2206116fbe7b5))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.0 to 33.0.0 ([6a499ab](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6a499ab4d434316d107be7c0ddfd9b0c5f08535a))
* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([d4ef834](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d4ef8345c896cecce81ffc75fffb469947c38fb5))
* **deps-dev:** bump faker from 5.5.2 to 5.5.3 ([976e1f4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/976e1f4289383bd4e20f9fbc0906e09cd1d52d78))
* **deps:** bump actions/cache from v2.1.4 to v2.1.5 ([21a7398](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/21a7398ea267d3cb6fe49ba5af9f7bb4e5ff99df))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([447050a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/447050a08b34e46006aec9031b75d35fc6d33d95))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([ed05c81](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ed05c815877d0bbfc576211891503aac9e6d1bd3))
* **deps:** bump brpaz/hadolint-action from v1.3.1 to v1.4.0 ([c0c003b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c0c003beecb0e71ca8026c83200fa87222fe8e6c))
* **deps:** bump fastify from 3.14.1 to 3.15.0 ([8441bf9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8441bf959d86c4d54a24acd0ddd7f8d19703c1d7))
* **deps:** bump fastify-autoload from 3.6.0 to 3.7.1 ([5de036f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5de036fdfdef99b1cdfcdc45c94b506414ff81a0))
* **deps:** bump fastify-cors from 5.2.0 to 6.0.0 ([8bd1c6e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8bd1c6e6883365b4da658347c1dd461d43103df3))
* **deps:** bump fastify-disablecache from 1.0.6 to 2.0.0 ([5c317fd](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5c317fde8e4d99864e0222338214d91868ec345c))
* **deps:** bump fastify-swagger from 4.5.0 to 4.7.0 ([82dc7cf](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/82dc7cfb4106d2d46b2cd7ea2eb8243cd8a6031c))
* **deps:** bump GoogleCloudPlatform/release-please-action ([8a6536c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8a6536cf9a3648af023b9c6e1a1d2c0cd2096f85))
* **deps:** bump pino from 6.11.2 to 6.11.3 ([3b41c70](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3b41c7008a6c17ae300be0f5551e37680d60a313))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.1.0 ([b511be8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b511be870b39e66e5f0f70e23c9df780a4a3b49d))


### Continuous Integration

* do not run coveralls steps/jobs on forks ([6aa0be2](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6aa0be27d27041d2032e97f4ac3896ca7ea9035f))
* **link-check:** fix skip regex ([33bbbf8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/33bbbf88f441de3ce049d1bbe94bef00637475a0))
* **typoci:** add "pino" to excluded words ([d5b831d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d5b831df309b0736a89d528fbc747a1d77095149))


### Miscellaneous

* **env:** add whitespace ([318390a](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/318390ad703d14e316ea6748eb77f7c61e0d2a8f))
* remove support for nodejs v10 ([6b919f3](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6b919f37e8005703a9b17fddb21d0a226b059741))

## [3.0.0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v2.4.0...v3.0.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* `CORS_METHODS` env variable removed

### Features

* add support for cors preflight requests ([107f776](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/107f776479ee299b8d6239781f3cc8ba918bbad2))
* **config:** support `access-control-allow-credentials` cors header ([41d6ba0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/41d6ba087fb80425ef156c3a220443e5b3cbafe5))


### Bug Fixes

* **config:** comma-delimited string support for cors origin value ([a5a3bf4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a5a3bf4e9bfc199cbf039297688ee662e394399d))


### Miscellaneous

* **env.template:** add note discouraging reflecting cors origin ([c6f3548](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c6f35480d9494c3b93119ab788e919bac691093f))
* **env.template:** remove bad example ([ba21860](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ba218607c16d9162632299c8e7fba6170ddcdedf))
* **tests:** standardise test file names ([4733bff](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4733bffb803c4987ffb6a8e796bdd537e2a8971a))


### Continuous Integration

* add cleanup-run job ([0623dae](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0623dae8935936506a3c70dffc79ddf221d614af))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.0.1 to 12.1.1 ([1e5969d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1e5969d5228706f23c6c99fa3866d8e5469f99d5))
* **deps-dev:** bump @commitlint/config-conventional ([08a7927](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/08a79272aa4e0585fdeda3e775657504b1d20d67))
* **deps-dev:** bump eslint-plugin-jest from 24.3.2 to 24.3.4 ([6674161](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/66741611cb02676053d08909f0d0053d761c9d46))
* **deps-dev:** bump faker from 5.5.1 to 5.5.2 ([59d53f9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/59d53f9a0ac0c0e2ecb7c3e3a3c6a9feb00790a4))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([84f6671](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/84f6671f1c1f2b12de8be3387acda55f9f3bb6c3))
* **deps:** bump fastify-swagger from 4.4.2 to 4.5.0 ([36a1403](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/36a14036d7d45ca9dcb4e484165a5112f4900aa1))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([4317754](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/431775477d9352715d6f157d6d0edbf79f7b3ed3))

## [2.4.0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v2.3.4...v2.4.0) (2021-03-30)


### Features

* **server:** use `strict-origin-when-cross-origin` referrer policy ([1b34f85](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1b34f85940544379b372cc3ec3835a27940b9bf6))


### Documentation

* **readme:** tweak contextual link in pas section ([fdb8002](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fdb800282238a480652098c0e13b99541c2a959d))


### Continuous Integration

* **automerge:** move automerge job into new workflow ([7c08ec3](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7c08ec3af5b8d85bbe1f7401d83eb10a382e9de1))
* **ci:** ignore dependabot prs for commit message linting ([90c78e0](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/90c78e09fbcebb26db85f1b9f8303b436888a7f1))
* **stale:** shorten workflow name ([8eee708](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8eee7083c0a270bcb81f0a0ce72ae4267a460b69))
* **workflows:** run only on push and pulls to master branch ([a310cb7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a310cb7ae232a6415417464d613d219e27b41b16))


### Dependencies

* **deps-dev:** bump autocannon from 7.0.4 to 7.0.5 ([e5f9f79](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e5f9f79cd590b81eb2417c31426698c463273eb9))
* **deps-dev:** bump eslint from 7.21.0 to 7.23.0 ([b258570](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b258570fa42f29ec76c99097f38c2f515cb25e7f))
* **deps-dev:** bump eslint-plugin-jest from 24.1.5 to 24.3.2 ([d488b87](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d488b878f40725132d2e74c2d000f23631d88d7d))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.2.0 to 32.3.0 ([4f4f270](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4f4f270d60a3fa1e9396c4e33f4ab34eacf64e49))
* **deps-dev:** bump faker from 5.4.0 to 5.5.1 ([507f5b6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/507f5b624740994e1f06a53a7826cfbeeddf5a3c))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([d919a61](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d919a61486422e1035b5f69bd41633050bb05680))
* **deps-dev:** bump pino-pretty from 4.5.0 to 4.7.1 ([73a455f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/73a455f3946e3d375b8bd4c1e1edf49b5e91f334))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([2aa94da](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2aa94da595749e5a0f4556747183a15f75928f04))
* **deps:** bump env-schema from 2.1.0 to 3.0.1 ([3839c42](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3839c421bbfd2236d72459a72b10ff2eb94d6918))
* **deps:** bump fastify from 3.12.0 to 3.14.1 ([4859997](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4859997ace1c2cf9682b7acb2313e8ddfa5f89bd))
* **deps:** bump fastify-autoload from 3.5.2 to 3.6.0 ([9d39528](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9d395281046b19819d3acd3687aa6df6b9977c08))
* **deps:** bump fastify-disablecache from 1.0.4 to 1.0.6 ([05e8e5f](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/05e8e5fe04aa80e2043dbf159e65efd21c0ce777))
* **deps:** bump fastify-helmet from 5.2.0 to 5.3.1 ([df7ed11](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/df7ed115c47c35fed2c2f5521d32452184db932b))
* **deps:** bump fastify-swagger from 4.3.1 to 4.4.2 ([3cb8667](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3cb866704cce358af4df003532d8f07c02febae4))
* **deps:** bump GoogleCloudPlatform/release-please-action ([23028fc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/23028fcd50712ba517f52f603e94aae6cbb9eba2))
* **deps:** bump pino from 6.11.1 to 6.11.2 ([3465d2d](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3465d2dde176de319d7bee775ebd65a20a3daa6b))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([de0cbb9](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/de0cbb90f91ff252b71bc86ab32a6a375de84140))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([86cfb32](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/86cfb328318d077347f3e075faac245691bdd57a))
* **docker:** bump git from 2.24.3 to 2.24.4 ([52b064e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/52b064e9088537b662c5dbca3d68025c29329fb0))
* **docker:** remove now optional `version` value ([c695a58](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c695a5896c2cc9d5e775a7d8f6ca5643f51159b0))


### Miscellaneous

* **config:** move `pino-pretty` config out of script ([388c774](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/388c774cefa395c6faca93a47c477db98ca3a40f))
* **env.template:** add default cors settings ([a44648c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a44648c09b48f2665cdd145bef1619d9cb9586c5))
* **prettierignore:** add yarn lock file ([8973d77](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8973d77ecfa6bf8f9df27d2984d475bd4081a1da))
* **readme:** replace jpg ydh logo with svg ([8a055a6](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8a055a6264d810a8fb66bc60eef7671e7369e581))
* remove contraction usage in comments ([a8fb98b](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a8fb98bec2a12e9209a1f7cee9ee856c3538e84e))
* **workflows:** rename ci and perf sections ([83478bc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/83478bc713267a97a78bf9277f5de1703f935cfe))

### [2.3.4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/compare/v2.3.3...v2.3.4) (2021-03-03)


### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([45c0187](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/45c018786eff2c10a2419d6db7b8780f7b6f5c78))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#132](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/132)) ([c0750f7](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c0750f76c8927e51cd71494263695c973e0209ba))
* **deps-dev:** bump @commitlint/config-conventional ([764b623](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/764b623f7e122e6eb9e02c9c91343eb70dfbcbf6))
* **deps-dev:** bump autocannon from 7.0.3 to 7.0.4 ([#134](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/134)) ([4ecec01](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4ecec0160cde8d00aef0fad4dbec9fb8ea521bed))
* **deps-dev:** bump eslint from 7.20.0 to 7.21.0 ([#129](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/129)) ([71ca399](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/71ca39996acd81aab247767ede93d53700925bf5))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([d6edee8](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d6edee8135b03f9ac21f020acfa854f25cb092eb))
* **deps-dev:** bump eslint-plugin-jest from 24.1.3 to 24.1.5 ([2d59023](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2d59023c52163a5596e271de83591b724a9cd69e))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.0.1 to 32.2.0 ([#135](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/135)) ([68095a5](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/68095a574ee6c5b4f91d68825dba30087b2c954e))
* **deps-dev:** bump lodash from 4.17.20 to 4.17.21 ([#128](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/128)) ([b63ebcc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b63ebcc37a718eecd58e7f7ac07b7d0dcdee564b))
* **deps:** bump fastify-autoload from 3.4.2 to 3.5.2 ([#130](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/130)) ([cd58609](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cd5860919a57ca2ae78485b6dc61b647f6f729af))
* **deps:** bump fluent-json-schema from 2.0.3 to 2.0.4 ([#131](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/131)) ([dc61a4e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/dc61a4e6ba32c3542a2b46a7b5dbdfca4c539434))
* **deps:** bump obfuscated-querystring from `8c7c78e` to `25016a8` ([eb417da](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/eb417daaf1fd56e78b7cac467a05fa816f210747))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([4512ccc](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4512cccfcdc3d048d3f181809dc6dc100c074e19))
* **deps:** specify minor and hotfix versions ([edb6a94](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/edb6a94aa219d39a1eedc17b039267d578c04a3f))


### Miscellaneous

* add link check workflow ([8cca09e](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8cca09e325eaaca0e833b846ee613fe0eb42f611))
* automate release and changelog generation ([feaaf73](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/feaaf7390005392afe49b64f605e06df308b2bc0))
* **codeql:** remove autobuild action ([039da94](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/039da94f077f3d09fda92ccc524cc61c21fee9d3))
* **linkcheck:** extend ignored urls ([6096ff4](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6096ff48a1d31fad4b21f1c0b08b100713889d81))
* **lint-check:** compress patterns ([2d92143](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2d921433193f2b9ba9b1962e7620b853969f2535))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#141](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/issues/141)) ([a21e302](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a21e302f3ad038f1c4389c9dabb3d47b5acba4a5))
* replace stalebot with github action ([882fd39](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/882fd3959a3fcad711c389726f85082f88d77524))
* require `commit-lint` job to pass before automerge ([f4c0dbd](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f4c0dbd786d03ea4a32d9bd89f19a17691a45cb6))
* **vscode:** remove conflicting prettier ext setting ([ab9969c](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ab9969ca2138d50a9928645448bdd92ec5b101cd))
* **workflows:** move release steps into `cd` workflow ([e77e2d3](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e77e2d3aec129fc97a4087d1d362efd7da1bffaa))
* **workflows:** remove redundant comments ([d34aebe](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d34aebe4d8461704edd30a55346c5348a29f7641))
* **workflows:** rename spellcheck workflow ([a631444](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a6314441b458390b807dec0f92d427917c634bea))
* **workflows:** tidy node-version syntax ([75e9c29](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/75e9c294a5a0f5ed4b98a496b61159bfff88f9a8))


### Documentation

* **changelog:** fix h3 header style ([9195a64](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9195a640b6f94988116f0a053e2a946b3662222f))
* **readme:** fix broken link ([6f53105](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6f53105d5faaab891a851f1b367c39bc6d7c8e60))
* **readme:** shorten links ([f5da911](https://www.github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f5da9113b5827da6b6668f1ce006d41f684133a9))

### 2.3.3 (2021-02-16)

-   build(deps-dev): bump eslint from 7.19.0 to 7.20.0 (#119) ([5e7916d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5e7916d)), closes [#119](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/119)
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.6.0 to 32.0.1 (#120) ([6c656ff](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6c656ff)), closes [#120](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/120)
-   build(deps-dev): bump eslint-plugin-promise from 4.2.1 to 4.3.1 (#121) ([905c6cd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/905c6cd)), closes [#121](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/121)
-   build(deps-dev): bump faker from 5.2.0 to 5.4.0 (#123) ([b9e35b5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b9e35b5)), closes [#123](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/123)
-   build(deps-dev): pin husky major version ([ca34bac](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ca34bac))
-   build(deps): bump actions/cache from v2 to v2.1.4 (#117) ([5601b15](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5601b15)), closes [#117](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/117)
-   build(deps): bump env-schema from 2.0.1 to 2.1.0 (#118) ([2ad9149](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2ad9149)), closes [#118](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/118)
-   build(deps): bump fastify from 3.11.0 to 3.12.0 (#124) ([6143ce4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6143ce4)), closes [#124](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/124)
-   build(deps): bump fastify-swagger from 4.0.1 to 4.3.1 (#125) ([844db15](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/844db15)), closes [#125](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/125)
-   build(deps): bump pino from 6.11.0 to 6.11.1 (#122) ([b24e991](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b24e991)), closes [#122](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/122)
-   build(deps): bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 (#116) ([c16ce92](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c16ce92)), closes [#116](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/116)
-   ci: add commit-lint job ([2261c79](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2261c79))
-   ci: replace typo ci app with action ([2878197](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2878197))
-   ci(dependabot): ignore husky updates ([2c976d4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2c976d4))
-   style: shorten husky pre-push script ([90186c5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/90186c5))
-   style(readme): add linebreaks between badges ([c28d50c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c28d50c))
-   style(scripts): rename `jest-coverage` to `jest:coverage` ([bb9dd78](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bb9dd78))
-   style(tests): use apa header style for describe name params ([d8aa936](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d8aa936))
-   chore: add 0bsd and unlicense to list of allowed licenses ([4d3981a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4d3981a))
-   chore: add apache-2.0 to list of allowed licenses ([c1e5520](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c1e5520))
-   chore: add commitlint husky `commit-msg` hook ([912bd69](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/912bd69))
-   chore: add documentation style link to pr template ([379353b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/379353b))
-   chore(vscode): add `redhat.vscode-yaml` as recommended extension ([c3cba66](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c3cba66))
-   chore(vscode): add `updateImportsOnFileMove` setting ([cbc75a2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cbc75a2))
-   chore(vscode): add workspace settings and extensions ([b135375](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b135375))
-   docs(contributing): add documentation style ([17f5513](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/17f5513))
-   docs(readme): add ignore scripts arg ([e37a067](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e37a067))

### 2.3.2 (2021-02-02)

-   build(deps-dev): bump pino-pretty from 4.4.0 to 4.5.0 (#111) ([f5501e3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f5501e3)), closes [#111](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/111)
-   build(deps-dev): replace deprecated lodash.clonedeep ([8acbd18](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8acbd18))
-   fix(config): stop rotatinglogstream flooding stdout ([5f8e41b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5f8e41b))
-   refactor(config): update openapi docs from v2.\*.\* to v3.\*.\* ([382eb45](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/382eb45))

### 2.3.1 (2021-02-01)

-   chore: check that direct dependencies use permissible licenses ([a423d78](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a423d78))
-   chore: exclude obs - allowed lgpl as library not altered/compiled ([d41ea85](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d41ea85))
-   chore: stop excess coverage files being generated ([0342eba](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0342eba))
-   chore(routes): specify further openapi spec values ([35327a1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/35327a1))
-   fix(docker): use node command over npm ([0a5235c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0a5235c))
-   refactor(server): use new exposed CSP dir from `fastify-helmet` ([d4d068b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d4d068b))
-   style: rename `license-checker` to `lint:licenses` ([17d8c32](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/17d8c32))
-   build(deps-dev): bump eslint from 7.18.0 to 7.19.0 (#105) ([e115fd3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e115fd3)), closes [#105](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/105)
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.4.0 to 31.6.0 (#103) ([376684b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/376684b)), closes [#103](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/103)
-   build(deps-dev): bump pino-pretty from 4.3.0 to 4.4.0 (#101) ([50cf14c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/50cf14c)), closes [#101](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/101)
-   build(deps-dev): remove coveralls, replaced by github action ([b107c12](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b107c12))
-   build(deps-dev): replace lodash with lodash.clonedeep ([92fdfef](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/92fdfef))
-   build(deps): bump fastify-disablecache from 1.0.3 to 1.0.4 (#107) ([1e941a0](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1e941a0)), closes [#107](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/107)
-   build(deps): bump fastify-helmet from 5.1.0 to 5.2.0 (#102) ([03066aa](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/03066aa)), closes [#102](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/102)
-   build(deps): bump fastify-swagger from 4.0.0 to 4.0.1 (#104) ([2370604](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2370604)), closes [#104](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/104)
-   docs(readme): remove superfluous text in pm2 install instructions ([4572cf2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4572cf2))

## 2.3.0 (2021-01-28)

-   build(deps-dev): add husky for git hook handling ([59dc590](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/59dc590))
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.0.8 to 31.4.0 (#95) ([300e62f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/300e62f)), closes [#95](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/95)
-   build(deps-dev): bump faker from 5.1.0 to 5.2.0 (#98) ([d667e00](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d667e00)), closes [#98](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/98)
-   build(deps): bump fastify from 3.10.1 to 3.11.0 (#99) ([7565482](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7565482)), closes [#99](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/99)
-   build(deps): bump fastify-autoload from 3.4.0 to 3.4.2 (#96) ([82a6b4d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/82a6b4d)), closes [#96](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/96)
-   build(deps): bump fastify-cors from 5.1.0 to 5.2.0 (#94) ([6a7144b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6a7144b)), closes [#94](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/94)
-   build(deps): bump fastify-swagger from 3.5.0 to 4.0.0 (#97) ([daf054b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/daf054b)), closes [#97](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/97)
-   feat(config): allow configurable cors headers ([c6a0dbc](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c6a0dbc))
-   style: capitalise headings correctly ([c6d9bf6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c6d9bf6))
-   style(ci): capitalise jobs and job step names ([29228a8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/29228a8))
-   style(readme): capitalise headings correctly ([b919062](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b919062))
-   style(readme): prettier badge shape ([abed326](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/abed326))
-   style(tests): rename `res` to `response` ([46ceeb6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/46ceeb6))
-   fix(config): add required properties ([af86f94](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/af86f94))
-   docs: bump coc from v1.4.0 to v2.0.0 ([915b17e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/915b17e))
-   docs(readme): add description ([bb35ec4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bb35ec4))
-   chore: add pull request template ([c6fb466](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c6fb466))
-   chore: standardise `license-checker` script ([05d6917](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/05d6917))
-   ci: cache on `node-version` as well as `os` ([2a3aa33](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2a3aa33))
-   ci(github-actions): set `flag-name` for parallel coverage tests ([d5d6a60](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d5d6a60))
-   ci(github-actions): set semver for coverallsapp ([a29900b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a29900b))

### 2.2.6 (2021-01-22)

-   refactor(pm2): use repo name for instances; remove redundant env setting ([54aecfa](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/54aecfa))
-   refactor(server): use default helmet referrer policy ([595bbfa](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/595bbfa))
-   build(deps-dev): bump autocannon from 7.0.1 to 7.0.3 (#89) ([c4ce84d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c4ce84d)), closes [#89](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/89)
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.0.7 to 31.0.8 (#90) ([b0894de](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b0894de)), closes [#90](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/90)
-   build(docker): speed up install by using `npm ci` over `npm install` ([c9100b7](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c9100b7))
-   test(routes/healthcheck): correct description ([ecf0f73](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ecf0f73))

### 2.2.5 (2021-01-19)

-   build(deps-dev): bump eslint-config-prettier from 7.1.0 to 7.2.0 (#88) ([d0ea793](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d0ea793)), closes [#88](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/88)
-   build(deps): bump fastify-disablecache from 1.0.2 to 1.0.3 (#87) ([9ece242](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9ece242)), closes [#87](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/87)
-   build(deps): bump helmet from 4.4.0 to 4.4.1 (#86) ([e4977fd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e4977fd)), closes [#86](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/86)
-   fix(routes/redirect): limit ods code length to max of 9 ([b4e560e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b4e560e))
-   fix(server): disable swagger `/docs` route if production instance ([ce510a2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ce510a2))
-   refactor(routes/healthcheck): remove unused `options` param ([a1ab2d1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a1ab2d1))
-   ci: lint lockfile ([cd13b0a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cd13b0a))

### 2.2.4 (2021-01-18)

-   build: remove `yarn` as package manager, revert to `npm` ([118752e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/118752e))
-   build(deps-dev): bump eslint-plugin-jsdoc from 31.0.6 to 31.0.7 (#82) ([935dd6a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/935dd6a)), closes [#82](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/82)
-   build(deps): bump fastify-disablecache from 1.0.1 to 1.0.2 (#83) ([8fa3b48](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8fa3b48)), closes [#83](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/83)
-   build(deps): bump helmet from 4.3.1 to 4.4.0 (#84) ([1c33fc9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1c33fc9)), closes [#84](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/84)
-   docs(readme): add contextual link guidance ([2169b2d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2169b2d))
-   docs(readme): correct script ([651f651](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/651f651))
-   ci(typo-ci): add `ydh` to list of excluded words ([b7d6291](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b7d6291))
-   chore(package): add homepage and bug urls ([8f2d827](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8f2d827))
-   chore(plugins): add missing param descriptions ([5e29358](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5e29358))
-   style: rename `querystring` to `query` ([bed5792](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bed5792))

### 2.2.3 (2021-01-14)

-   fix(server): set referrer policy with fallback ([7567f0a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7567f0a))
-   style(server): rename plugin variable ([6b8d7d2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6b8d7d2))
-   chore: disable cors in template ([4a7c671](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4a7c671))

### 2.2.2 (2021-01-12)

-   build(deps): bump fastify-disablecache from 1.0.0 to 1.0.1 (#78) ([79fad03](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/79fad03)), closes [#78](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/78)
-   chore: add metadata to api schema ([a4f9d56](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a4f9d56))
-   chore: add tags ([47c9af1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/47c9af1))
-   ci: remove redundant javascript dictionary ([1ca5375](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1ca5375))
-   test: set resetmocks option in jest config ([46e63b4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/46e63b4))
-   fix(routes): correct schema to be nullable string ([4ff507a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4ff507a))

### 2.2.1 (2021-01-11)

-   fix(env): set default cors to wildcard as boolean option broken ([1699db1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1699db1))
-   fix(server): add form-action csp directive ([026733f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/026733f))
-   fix(server): disable caching ([f93470b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f93470b))

## 2.2.0 (2021-01-11)

-   build: add typoci config file ([7b795a4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7b795a4))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.1 (#72) ([fe27d17](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fe27d17)), closes [#72](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/72)
-   build(deps-dev): bump nodemon from 2.0.6 to 2.0.7 (#71) ([bfd35fc](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bfd35fc)), closes [#71](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/71)
-   build(deps): bump fastify-helmet from 5.0.3 to 5.1.0 (#74) ([a15119f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a15119f)), closes [#74](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/74)
-   build(deps): bump pino from 6.9.0 to 6.10.0 (#73) ([6c466ac](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6c466ac)), closes [#73](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/73)
-   feat(routes): add healthcheck route ([bc56c06](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bc56c06))
-   style: rename fastifyplugin variable to fp ([10a5aa4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/10a5aa4))
-   refactor: ignore trailing slash service-wide ([b6d8223](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b6d8223))
-   refactor(plugins): move plugins back to src/plugins; add secured context ([5f727f4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5f727f4))
-   refactor(server): use helmet default csp directives function ([30bc29e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/30bc29e))
-   docs(readme): update yarn link ([6439fea](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6439fea))

### 2.1.2 (2021-01-05)

-   fix(server): set missing content-security-policy directives ([26a3eea](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/26a3eea))

### 2.1.1 (2021-01-05)

-   refactor(routes/redirect): use fluent schema validation ([ae152e1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ae152e1))
-   test(server): remove benchmarking from unit tests ([0cc8249](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0cc8249))
-   chore: remove leftover commented over code ([8097336](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8097336))
-   chore: remove test https cert and key from `.env.template` ([c6d6b41](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c6d6b41))

## 2.1.0 (2021-01-03)

-   build(deps-dev): bump eslint from 7.16.0 to 7.17.0 (#63) ([a289575](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a289575)), closes [#63](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/63)
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.9 to 30.7.12 (#64) ([b24c32f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b24c32f)), closes [#64](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/64)
-   refactor(routes/redirect): add route-specific plugins under route dir ([9866253](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9866253))
-   refactor(routes/redirect): remove plugin registration ([2bca5b7](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2bca5b7))
-   ci: fix caching of node dependencies ([4539c1d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4539c1d))
-   ci: use yarn cache of node dependencies if present ([6f6b316](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6f6b316))
-   ci(codeql): specify more query suites ([023d178](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/023d178))
-   feat(routes/docs): add basic swagger documentation route ([d2e15e2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d2e15e2))
-   style(routes/redirect): rename function ([39c4f48](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/39c4f48))
-   style(server): chain register functions ([4049848](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4049848))

### 2.0.1 (2020-12-31)

-   build(deps): bump pino from 6.8.0 to 6.9.0 (#58) ([7cdfa13](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7cdfa13)), closes [#58](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/58)
-   build(docker): fix log directory ([ca3ea87](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ca3ea87))
-   chore: remove old .env files from gitignore ([007cef9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/007cef9))
-   chore(scripts): add `start:dev` dev script ([85aaeb3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/85aaeb3))
-   docs(readme): add ydh logo ([b26b180](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b26b180))
-   docs(readme): recommend docker usage over pm2 ([fc0f749](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fc0f749))
-   fix(pm2): config file script ([f004e7a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f004e7a))
-   test(config): cover cors origin string; add ssl/pfx checks ([e0dcbeb](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e0dcbeb))
-   test(config): cover ssl/pfx error branches ([c57f736](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c57f736))
-   refactor: replace custom-env and cross-env with dotenv ([ddf1447](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ddf1447))
-   refactor(config): throw error rather than log ([18003d2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/18003d2))
-   style(routes/redirect): use full declaration method ([77eb02d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/77eb02d))

## 2.0.0 (2020-12-30)

-   docs(contributing): update prettier script ([1141bf7](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1141bf7))
-   docs(readme): correct output reference ([d0875d8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d0875d8))
-   build: update github-actions and docker with dependabot ([6923ddd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6923ddd))
-   build(deps-dev): remove jsinspect ([e2e25ff](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e2e25ff))
-   build(deps): add env-schema ([ea3b6a1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ea3b6a1))
-   build(deps): add fluent-json-schema ([fe6e47a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fe6e47a))
-   build(deps): bump brpaz/hadolint-action from v1.2.1 to v1.3.1 ([e08c026](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e08c026))
-   build(deps): bump fastify/github-action-merge-dependabot (#51) ([f5e49b1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f5e49b1)), closes [#51](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/51)
-   build(docker): declare log_rotation_filename env variable ([1e3b646](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1e3b646))
-   refactor(config): make fs calls async ([bd33e14](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bd33e14))
-   refactor(plugins/keycloak): change `option` param handling ([ed5be5a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ed5be5a))
-   refactor(plugins/obfuscate): change `option` param handling ([b6ac30c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b6ac30c))
-   refactor(routes): add redirect path ([2e05bb6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2e05bb6))
-   refactor(routes/wildcard): autoloads plugins ([669f626](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/669f626))
-   refactor(server): rename app to server; server now plugin ([2f20375](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2f20375))
-   test: fix calling of `getconfig()` function ([b40bcb9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b40bcb9))
-   test(app): ignore app.js for coverage ([48a07ee](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/48a07ee))
-   chore: tidy jsdoc tags and eslint comments ([6507667](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6507667))
-   fix(config): defaults ([696d0a6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/696d0a6))
-   fix(config): location of `https` object ([b3fe4b4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b3fe4b4))
-   fix(config): log_rotation_filename default ([54b2bb7](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/54b2bb7))
-   feat(config): add config validation ([171430f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/171430f))
-   ci: refactor `codeql-analysis.yml` ([a19272a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a19272a))
-   style(ci): tidy job names ([f6398a9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f6398a9))

### BREAKING CHANGE

-   env variables prefixed with `LOGGER_` changed to `LOG_`. `CORS_ALLOWED_HEADERS_ARRAY` and `CORS_METHODS_ARRAY` have been removed.
-   keycloak plugin function now expects `options.keycloak` not `options`
-   obfuscate plugin function now expects `options.obfuscate` not `options`
-   Redirect made to `/` must now be made to `/redirect`

### 1.1.2 (2020-12-28)

-   docs: clarify on json schema validation ([e529595](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e529595))
-   docs(readme): add missing backticks ([665767c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/665767c))
-   docs(readme): add note about validation and serialisation ([6b1e865](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6b1e865))
-   docs(readme): even more grammar tixes ([f35c97b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f35c97b))
-   docs(readme): grammar fixes ([958b4e5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/958b4e5))
-   build(deps-dev): remove eslint-plugin-json ([addb15a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/addb15a))
-   build(deps-dev): remove unused dev dependencies ([1bd730b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/1bd730b))
-   build(deps): bump fastify-autoload from 3.3.1 to 3.4.0 ([f67e6a6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f67e6a6))
-   build(docker): bump docker-compose from 3.0 to 3.8 ([644cd3b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/644cd3b))
-   build(docker): pin git version ([04c1437](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/04c1437))
-   ci: add docker test job ([42b8f3a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/42b8f3a))
-   ci: add docker-compose test job ([3e4e9ad](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3e4e9ad))
-   ci: add dockerfile lint job ([878378c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/878378c))
-   ci: do not run github actions for draft prs ([6b8e8ca](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6b8e8ca))
-   ci: temporarily disable docker test job ([edaf01a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/edaf01a))
-   ci: use yarn `--frozen-lockfile` flag for repro deps ([7fbbc05](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7fbbc05))
-   fix(docker): set `service_host` env variable ([05c052a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/05c052a))
-   style: use default prettier options for trailing commas and quotes ([5c03f65](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5c03f65))
-   chore: rename repo ([f9316f4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f9316f4))
-   chore(scripts): summarise count of dependency licenses ([94631f7](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/94631f7))
-   refactor(docker): remove redundant `if...else` statement ([594eae8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/594eae8))

### 1.1.1 (2020-12-22)

-   build(deps-dev): add autocannon ([e23a46f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e23a46f))
-   build(deps-dev): add license-checker ([78fb88c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/78fb88c))
-   build(deps): bump axios from 0.21.0 to 0.21.1 ([0d6a9dd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0d6a9dd))
-   refactor(plugins): don't add prehandler hook if keycloak option disabled ([7249a9a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7249a9a))
-   refactor(plugins): remove object for mandatory param ([d95b7fe](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d95b7fe))
-   refactor(routes): add regex patterns to validate query string params ([81fa44f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/81fa44f))
-   test(app): add benchmark tests ([2b80124](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2b80124))
-   test(app): query mock path instead of live path ([fcfa94d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/fcfa94d))
-   test(app): query string param values schema validation ([62e8eed](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/62e8eed))
-   docs(readme): add acknowledgements section ([3a301a5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/3a301a5))
-   docs(readme): add links to request builders ([6139927](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/6139927))
-   docs(readme): grammar fixes ([661280a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/661280a))
-   chore: move test resources into dedicated folder ([c18408e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c18408e))
-   ci: add license-checker to lint job ([7bfda07](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7bfda07))
-   tests(app): fix min and max random numbers ([8fa0abf](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8fa0abf))

## 1.1.0 (2020-12-20)

-   chore: add stale confg ([4d8c099](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4d8c099))
-   chore: remove duplicate install step ([a1d6ab0](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a1d6ab0))
-   chore: update repository value ([80549ca](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/80549ca))
-   chore(package): update description ([cd77415](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cd77415))
-   fix: adhere to `arrow-body-style` eslint rule ([f513c96](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f513c96))
-   feat: add configurable cors ([334830d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/334830d))
-   build(deps-dev): bump eslint from 7.14.0 to 7.16.0 ([b10c720](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b10c720))
-   build(deps-dev): bump eslint-config-prettier from 6.15.0 to 7.1.0 ([d7436f9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d7436f9))
-   build(deps-dev): bump eslint-plugin-jsdoc from 30.7.8 to 30.7.9 ([082ec44](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/082ec44))
-   build(deps): bump fastify from 3.9.1 to 3.9.2 ([c2161a0](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c2161a0))
-   build(deps): bump obfuscated-querystring from `72e3a4b` to `8c7c78e` ([f79e54b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f79e54b))
-   build(deps): bump pino from 6.7.0 to 6.8.0 ([b535a33](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/b535a33))
-   ci: add linting job; expand scope of jobs to all branches/commits besides docs (#36) ([635abff](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/635abff)), closes [#36](https://github.com/Fdawgs/ydh-sider-obfuscation-service/issues/36)
-   ci: automatically merge dependabot pull requests on pass build stage ([7c64508](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/7c64508))
-   ci: require lint job on automerge ([f7b9666](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f7b9666))
-   docs(readme): clarify abbreviations ([c8c4d0f](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c8c4d0f))

### 1.0.1 (2020-12-04)

-   docs(readme): add motivation to intro ([cebdea6](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/cebdea6))
-   docs(readme): update deployment script ([af41310](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/af41310))
-   docs(readme): update run script ([87beab4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/87beab4))
-   chore(env): update note on docker deployment ([82e5f8b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/82e5f8b))
-   docs(readme): replace reference to expressjs ([d1d697b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d1d697b))
-   Revert "chore(scripts): set env for `start` script" ([71ef15e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/71ef15e))

## 1.0.0 (2020-12-03)

-   feat(config): allow for logger to be enabled/disabled ([78d58e8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/78d58e8))
-   test: add test ssl certs ([dca7c55](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/dca7c55))
-   test: add unit tests for plugins and route ([d9a65d3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d9a65d3))
-   test: disable logging for test instances ([595b635](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/595b635))
-   test: refine coverage collection paths ([59072bc](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/59072bc))
-   chore: suppress console warnings for tests ([90805b2](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/90805b2))
-   chore(scripts): set env for `start` script ([e91e914](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e91e914))
-   refactor(plugins): log errors thrown by plugins ([4ab37e8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4ab37e8))
-   refactor(server): move code out of function ([f8be983](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f8be983))

## 0.1.0 (2020-12-03)

-   build(deps-dev): bump dev dependencies ([56d2f81](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/56d2f81))
-   build(deps): bump fastify from 3.8.0 to 3.9.1 ([a4a2e48](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a4a2e48))
-   chore: add security.md ([ab40c53](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ab40c53))
-   chore: fix jsdoc return tag ([67089d1](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/67089d1))
-   chore: update jsdoc tags ([80fde55](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/80fde55))
-   refactor: replace console.log with pino logger usage ([e5c7162](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e5c7162))
-   refactor: separate app and server code ([704f4fa](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/704f4fa))
-   refactor: use http-errors dep to generate http errors ([38e8856](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/38e8856))
-   refactor(app): autoload routes ([8dc9541](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8dc9541))
-   refactor(app): directly export function ([372e5fd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/372e5fd))
-   refactor(config): human readable log files; write to rotating files ([d0100a5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d0100a5))
-   refactor(plugin): move options check inside hook ([70a3198](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/70a3198))
-   refactor(route): remove trakcare query params causing ie 11 issues ([8008a27](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/8008a27))
-   refactor(services): replace middleware with schema-based validation ([da4b993](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/da4b993))
-   style: rename `service` path to `routes` ([246fecf](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/246fecf))
-   docs(readme): update contents ([e83f8da](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/e83f8da))
-   docs(security): remove backticks ([0fb297c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0fb297c))
-   test(app): add basic tests ([5f93891](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/5f93891))
-   feat(config): allow log rotation to be customised; tidy env var names ([4222979](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4222979))
-   feat(config): allow obfuscation values to be customised ([0c69aee](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0c69aee))
-   feat(services): enforce iso8601 date format ([0e8dc97](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0e8dc97))
-   fix(config): check https files exist ([a4172d3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a4172d3))
-   fix(plugins): await second request ([370ac1c](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/370ac1c))

### 0.0.3 (2020-11-24)

-   build(deps-dev): bump dev dependencies ([80fb5c9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/80fb5c9))
-   build(deps): bump axios from 0.20.0 to 0.21.0 ([bc8fe23](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/bc8fe23))
-   build(deps): bump fastify from 3.5.1 to 3.8.0 ([9628820](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9628820))
-   build(deps): bump fastify-plugin from 2.3.4 to 3.0.0 ([d61c9ad](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d61c9ad))
-   build(deps): bump middie from 5.1.0 to 5.2.0 ([f8287f4](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/f8287f4))
-   build(deps): bump sanitize-middleware from 2.0.19 to 4.0.0 ([547670a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/547670a))
-   build(docker): restrict mapped ports to localhost ([4d4d29e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4d4d29e))
-   ci: add aggregate coverage calculations ([baf2d13](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/baf2d13))
-   ci: clean up config ([66226cd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/66226cd))
-   ci: name build stage ([4192e82](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4192e82))
-   ci: replace travis-ci with github actions ([d69ee20](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d69ee20))
-   docs(readme): add deploy steps and badges ([ec6ac51](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/ec6ac51))
-   style: format codeql.yml ([2f3a825](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2f3a825))

### 0.0.2 (2020-10-09)

-   build: create codeql-analysis.yml workflow file ([d55a014](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/d55a014))
-   build(deps-dev): bump dev dependencies ([a495dcd](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a495dcd))
-   build(deps): bump fastify from 3.4.1 to 3.5.1 ([9be655e](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/9be655e))
-   build(deps): bump sanitize-middleware from 2.0.17 to 2.0.19 ([90a51d9](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/90a51d9))
-   build(docker): update system and dependencies ([0497f43](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/0497f43))
-   chore(github): add dependabot config ([22c8da3](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/22c8da3))
-   chore(github): add issue templates ([a0f06d8](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/a0f06d8))
-   chore(pm2): watch .env files for config changes; set instances to max ([795650d](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/795650d))
-   chore(scripts): remove nodemon script ([2385588](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/2385588))
-   fix(config): remove duplicate value ([c883666](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/c883666))
-   docs(contributing): correct release step order ([612e7f5](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/612e7f5))
-   docs(contributing): remove reference to replaced jest script ([4694e0b](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/4694e0b))
-   docs(contributing): spelling and grammar fixes ([eabd04a](https://github.com/Fdawgs/ydh-sider-obfuscation-service/commit/eabd04a))
