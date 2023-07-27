'use strict';

/**
 * yeslint!
 *
 * A sensible, modern collection of configuration files for ESLint that enforces
 * beautiful code. It contains both rules to ensure correct code (e.g. enforce
 * `break` statements in each `switch` `case`), and rules to make your code
 * beautiful (e.g. adding a trailing comma to array items that start on a
 * newline).
 *
 * This object re-exports the individual configuration files in the `config`
 * folder from a central palce.
 *
 * @package yeslint!
 * @author Romein van Buren
 * @license MIT
 */
module.exports = {
  generic: require('./configs/generic.js'),
  node: require('./configs/node.js'),
  svelte: require('./configs/svelte.js'),
};
