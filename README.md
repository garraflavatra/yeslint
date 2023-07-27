# yeslint!

A sensible, modern collection of configuration files for [ESLint] that enforces beautiful code. It contains both rules to ensure correct code (e.g. enforce `break` statements in each `switch` `case`), and rules to make your code beautiful (e.g. adding a trailing comma to array items that start on a newline).

## What's included

Currently, the 3 following configuration files are available:

* `generic`: generic ESLint configuration for all modern JavaScript runtimes.
* `node`: an extension on the generic config, with rules specific to Node.js.
* `svelte`: configuration for [Svelte] and JavaScript in browser environments.

## Examples

Please see [the `examples` directory](./examples) for some examples. Files that start with `wrong.` contain many errors, and the fixed version of those files is in their `correct.` equivalent.

## Installation

Install it together with ESLint using [npm], [pnpm], [Yarn], or whatever package manager you like to use:

```bash
npm install --save-dev eslint yeslint
```

```bash
yarn add --dev eslint yeslint
```

```bash
pnpm add --save-dev eslint yeslint
```

Then, tell ESLint to extend this configuration. Add it either in `.eslintrc.json`, add it as the default export in `.eslintrc.js`, or add it in your `package.json` under the `"eslintConfig"` key.

Please consider the following example. You should replace `<name>` with the name of the configuration you want to use.

```javascript
module.exports = {
  extends: './node_modules/yeslint/config/<name>.js',
};
```

Or add this to your `package.json` file:

```json
"eslintConfig": {
  "extends": "./node_modules/yeslint/config/<name>.js"
}
```

After installing, run `npx eslint .` to lint your code for the first time, or use `npx eslint --fix .` to lint while automatically fixing all auto-fixable problems ESLint finds in your codebase.

## Author & license

© [Romein van Buren](mailto:romein@vburen.nl) 2023. yeslint! is released under the MIT license — see LICENSE for the full license text.

[ESLint]: https://eslint.org/
[Svelte]: https://svelte.dev/
[npm]: https://www.npmjs.com/
[pnpm]: https://pnpm.io/
[Yarn]: https://yarnpkg.com/
