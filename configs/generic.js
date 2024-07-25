'use strict';

let typescriptInstalled = false;

try {
  require('typescript');
  typescriptInstalled = true;
}
catch { /* not installed */ }

/**
 * Generic ESLint configuration for all modern JavaScript runtimes.
 *
 * @package yeslint!
 * @author Romein van Buren
 * @license MIT
 * @type {import('eslint').Linter.Config}
 */
const generic = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    es6: true,
  },
  extends: [ 'eslint:recommended' ],
  plugins: [ 'import' ],
  rules: {
    'no-undef': [
      'error',
      { typeof: true },
    ],
    'require-atomic-updates': 0,
    indent: [
      'error',
      2,
      { SwitchCase: 1 },
    ],
    strict: [
      'error',
      'safe',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'warn',
      'always',
    ],
    'accessor-pairs': 'error',
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'array-element-newline': 'off',
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': 'error',
    'block-spacing': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'comma-spacing': 'error',
    'comma-style': [
      'error',
      'last',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'generator-star-spacing': 'error',
    'id-blacklist': 'error',
    'id-match': 'error',
    'jsx-quotes': 'error',
    'keyword-spacing': 'error',
    'key-spacing': [
      'warn',
      { beforeColon: false },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-confusing-arrow': [
      'error',
      { allowParens: true },
    ],
    'no-console': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-extend-native': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: false,
        string: false,
      },
    ],
    'no-inner-declarations': [
      'error',
      'functions',
    ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-restricted-globals': [
      'error',
      'event',
      'name',
    ],
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-constructor': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-shorthand': [
      'error',
      'properties',
    ],
    'quote-props': [
      'error',
      'as-needed',
    ],
    'prefer-const': 'error',
    'require-yield': 'error',
    'semi-spacing': [ 'error' ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'template-curly-spacing': 'error',
    curly: 'error',
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'wrap-iife': [
      'error',
      'any',
    ],
    'yield-star-spacing': 'error',
    'multiline-ternary': [
      'error',
      'never',
    ],
    'no-nested-ternary': 'error',
    'no-lonely-if': 'error',
  },
  overrides: typescriptInstalled ? [ {
    files: '**/*.ts',
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint' ],
    extends: [ 'plugin:@typescript-eslint/recommended' ],
  } ] : [],
};

module.exports = generic;
