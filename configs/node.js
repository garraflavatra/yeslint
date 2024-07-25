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
  ...generic,
  env: {
    ...generic.env,
    node: true,
  },
};

module.exports = node;
