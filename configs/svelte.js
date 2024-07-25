'use strict';

const generic = require('./generic.js');

let typescriptInstalled = true;

try {
  require('typescript');
  typescriptInstalled = true;
}
catch { /* not installed */ }

/**
 * An extension on the default yeslint! generic config, with rules specific to
 * Svelte codebases and JavaScript source code for browser environments.
 *
 * @package yeslint!
 * @author Romein van Buren
 * @license MIT
 * @type {import('eslint').Linter.Config}
 */
const svelte = {
  ...generic,
  parserOptions: {
    ...generic.parserOptions,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    ...generic.browser,
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    ...generic.extends,
    'plugin:svelte/recommended',
  ],
  plugins: [
    ...generic.plugins,
    'svelte',
  ],
  overrides: [
    ...generic.overrides,
    {
      files: '*.svelte',
      parser: 'svelte-eslint-parser',
      parserOptions: typescriptInstalled ? {
        parser: '@typescript-eslint/parser',
      } : undefined,
      rules: {
        'no-inner-declarations': 0,
        'svelte/no-inner-declarations': [
          'error',
          'functions',
        ],
        'svelte/html-quotes': [
          'error',
          {
            prefer: 'double',
            dynamic: {
              quoted: false,
              avoidInvalidUnquotedInHTML: false,
            },
          },
        ],
        'svelte/no-useless-mustaches': 'warn',
        'svelte/require-store-reactive-access': 'warn',
        'svelte/no-reactive-literals': 'error',
        'svelte/html-closing-bracket-spacing': 'warn',
        'svelte/indent': [
          'warn',
          {
            indent: 2,
            ignoredNodes: [],
            switchCase: 1,
            alignAttributesVertically: false,
          },
        ],
        'svelte/max-attributes-per-line': [
          'warn',
          {
            multiline: 1,
            singleline: 4,
          },
        ],
        'svelte/first-attribute-linebreak': [
          'warn',
          {
            multiline: 'below',
            singleline: 'beside',
          },
        ],
        'svelte/mustache-spacing': 'warn',
        'svelte/no-extra-reactive-curlies': 'error',
        'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
        'svelte/prefer-class-directive': 'warn',
        'svelte/shorthand-attribute': 'warn',
        'svelte/shorthand-directive': 'warn',
        'svelte/spaced-html-comment': 'warn',
        'svelte/no-at-html-tags': 0,
        'svelte/html-self-closing': [
          'warn',
          'all',
        ],
      },
    },
  ],
  rules: {
    ...generic.rules,
    strict: 0,
  },
};

module.exports = svelte;
