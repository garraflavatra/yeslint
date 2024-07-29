# yeslint!

A sensible, modern collection of configuration files for [ESLint] 8.x that enforces beautiful and correct code. It contains both rules to ensure correct code (e.g. enforce `break` statements in each `switch` `case`), and rules to make your code beautiful (e.g. adding a trailing comma to array items that start on a newline).

TypeScript is supported out of the box! No configuration is required.

## What's included

Currently, the 3 following configuration files are available:

* `generic`: generic ESLint configuration for all modern JavaScript runtimes.
* `node`: an extension on the generic config, with rules specific to Node.js. Also works with [Bun]!
* `svelte`: configuration for [Svelte] and JavaScript in browser environments.

## Examples

Please see [the `example` directory](./example) for some examples. Files that start with `wrong.` contain many errors, and the fixed version of those files is in their `correct.` equivalent.

## Installation

Install it together with ESLint using [npm], [pnpm], [Yarn], or whatever package manager you like to use:

```bash
npm install --save-dev eslint@^8.57 @garraflavatra/yeslint
```

```bash
pnpm add --save-dev eslint@^8.57 @garraflavatra/yeslint
```

```bash
bun add --save-dev eslint@^8.57 @garraflavatra/yeslint
```

## Usage

After installing the package, tell ESLint to extend its configuration. Either add it to `.eslintrc.json`, set it as the default export in `.eslintrc.js`, or add it to your `package.json` under the `"eslintConfig"` key.

Please consider the following example. You should replace `<name>` with the name of the configuration you want to use.

```javascript
module.exports = {
  extends: './node_modules/@garraflavatra/yeslint/configs/<name>.js',
};
```

Or add this to your `package.json` file:

```json
"eslintConfig": {
  "extends": "./node_modules/@garraflavatra/yeslint/configs/<name>.js"
}
```

After installing, run `npx eslint .` to lint your code for the first time, or use `npx eslint --fix .` to lint while automatically fixing all auto-fixable problems ESLint finds in your codebase.

## Feedback

Please feel free to [report](https://github.com/garraflavatra/yeslint/issues/new) any issues and questions! Much appreciated :)

## Author & license

© [Romein van Buren](mailto:romein@vburen.nl) 2023-2024. yeslint! is released under the MIT license — see LICENSE for the full license text.

[![Smart Yellow](https://code.smartyellow.net/smartyellow/meta/raw/branch/main/logo.png)](https://www.smartyellow.nl)

[ESLint]: https://eslint.org/
[Svelte]: https://svelte.dev/
[npm]: https://www.npmjs.com/
[pnpm]: https://pnpm.io/
[Bun]: https://bun.sh/
