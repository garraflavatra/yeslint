'use strict';

const generic = require('./generic.js');

/**
 * An extension on the default yeslint! generic config, with rules specific to
 * Node.js environments.
 *
 * @package yeslint!
 * @author Romein van Buren
 * @license MIT
 * @type {import('eslint').Linter.Config}
 */
const node = {
  parserOptions: { ...generic.parserOptions },
  env: {
    ...generic.env,
    node: true,
  },
  extends: [ ...generic.extends ],
  plugins: [ ...generic.plugins ],
  rules: { ...generic.rules },
};

module.exports = node;
