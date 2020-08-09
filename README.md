# GmapVue

[![npm version](https://badge.fury.io/js/gmap-vue.svg)](https://badge.fury.io/js/gmap-vue)
[![Build Status](https://travis-ci.org/diegoazh/gmap-vue.svg?branch=master)](https://travis-ci.org/diegoazh/gmap-vue)
[![Publish](https://github.com/diegoazh/gmap-vue/workflows/publish/badge.svg)](https://github.com/diegoazh/gmap-vue/actions?query=workflow%3Apublish)
[![Documentation](https://github.com/diegoazh/gmap-vue/workflows/documentation/badge.svg)](https://github.com/diegoazh/gmap-vue/actions?query=workflow%3Adocumentation)
[![](https://data.jsdelivr.com/v1/package/npm/gmap-vue/badge)](https://www.jsdelivr.com/package/npm/gmap-vue)

## Plugin dependencies

|Name|Version|
|----|-------|
|*vue*|[![npm version](https://badge.fury.io/js/vue.svg)](https://badge.fury.io/js/vue)|
|*marker-clusterer-plus*|[![npm version](https://badge.fury.io/js/marker-clusterer-plus.svg)](https://badge.fury.io/js/marker-clusterer-plus)|

## Project dependencies

|Name|Version|
|----|-------|
|*lerna*|[![npm version](https://badge.fury.io/js/lerna.svg)](https://badge.fury.io/js/lerna)|
|*commitlint*|[![npm version](https://badge.fury.io/js/commitlint.svg)](https://badge.fury.io/js/commitlint)|
|*husky*|[![npm version](https://badge.fury.io/js/husky.svg)](https://badge.fury.io/js/husky)|
|*lint-staged*|[![npm version](https://badge.fury.io/js/lint-staged.svg)](https://badge.fury.io/js/lint-staged)|

## [Documentation](https://diegoazh.github.io/gmap-vue/)

The new documentation site is ready and it contains all examples for all components in the plugin.

If you find some parts of the plugin that was not documented, or if you think that some parts of the documentation are dark or can be improved please open an issue following our issue template rules.

You can use your own google maps api key in order to use the live examples section.

We have planed improve and grow all required documentation about the plugin.

Please follow next link to our [documentation](https://diegoazh.github.io/gmap-vue/).

## Fork of vue2-google-maps

This is a fork of the popuplar vue2-google-maps. As the author of the library no longer commit to maintain the project, we forked it to develop and maintain the project.

## CONTRIBUTORS ARE WELCOME

If you have time to contribute to a rather frequently used library, feel free to make a PR!

What's urgently needed are:

1. Better automated tests (unit with jest, e2e with cypress).
2. Better integration tests with the popular frameworks, especially Nuxt and Vue template
3. Migrated to VueJs v3.0
4. ~Better documentation (examples, recommendations)~

Please feel free to fork the project and make a PR to improve the plugin.

## Monorepo

This project use [lerna](https://github.com/lerna/lerna) to manage the plugin and documentation site.

- Clone the repository

- Run

```sh
npm install
```

- After that you can use the the html examples inside the examples folder on the `gmap-vue` package, take in mind that this folder will be disappear in a near feature. When this happen you only could test with the live example on the documentation site with your own google maps api key

- To start locally the documentation site you can run following command, it starts the documentation page on [http://localhost:8080/](http://localhost:8080/)

```sh
npm run start:docs
```

- To test the plugin you also can a cdn like [jsdelivr](https://diegoazh.github.io/gmap-vue/#jsdelivr) or [unpkg](https://diegoazh.github.io/gmap-vue/#unpkg), in the way that the documentation shows you

## README of GmapVue

You can read the plugin's README file following [this link](https://github.com/diegoazh/gmap-vue/blob/master/packages/gmap-vue/README.md).
