'use strict';

const svelteConfig = require('./configs/svelte.js');

/**
 * Don't import this! It is the configuration for the yeslint! code and is not
 * meant to be used elsewhere. Please refer to the readme.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  extends: './configs/node.js',
  ignorePatterns: [ '/example/wrong.*' ],
  overrides: [ {
    files: [ './example/*.svelte' ],
    overrides: svelteConfig.overrides,
    parserOptions: svelteConfig.parserOptions,
    env: svelteConfig.env,
    extends: svelteConfig.extends,
    plugins: svelteConfig.plugins,
  } ],
};
