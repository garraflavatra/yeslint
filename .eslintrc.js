'use strict';

const svelteConfig = require('./configs/svelte.js');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './configs/node.js',
  ignorePatterns: [ '/example/wrong.*' ],
  overrides: [ {
    files: [ './example/correct.svelte' ],
    overrides: svelteConfig.overrides,
    parserOptions: svelteConfig.parserOptions,
    env: svelteConfig.env,
    extends: svelteConfig.extends,
    plugins: svelteConfig.plugins,
  } ],
};
