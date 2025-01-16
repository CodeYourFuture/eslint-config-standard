# CYF ESLint Configuration

[![License](https://img.shields.io/npm/l/@codeyourfuture/eslint-config-standard.svg)](https://github.com/CodeYourFuture/eslint-config-standard/blob/main/LICENSE)
[![Build Status](https://github.com/CodeYourFuture/eslint-config-standard/workflows/Node.js%20CI/badge.svg)](https://github.com/CodeYourFuture/eslint-config-standard/actions)
[![NPM Version](https://img.shields.io/npm/v/@codeyourfuture/eslint-config-standard.svg)](https://www.npmjs.com/package/@codeyourfuture/eslint-config-standard)

A standard ESLint configuration for all CYF examples/projects.

## Versioning

This configuration uses [SemVer], interpreted as follows:

  - **Patch** release (`x.y.z` -> `x.y.z+1`): bugfixes and tooling updates mean that code that previously passed
    linting **should** continue to pass after the update.

  - **Minor** release (`x.y.z` -> `x.y+1.0`): a change to an existing rule means that code that previously failed
    linting **may** now pass, or a new configuration means that code that previously passed linting **should**
    continue to pass.

  - **Major** release (`x.y.z` -> `x+1.0.0`): a new rule, or a change to an existing rule, means that code that
    previously passed linting **will not** pass any more.

Please bear these definitions in mind when reporting any bugs.

## Usage

Install this package along with ESLint itself:

```bash
npm install --save-dev eslint @codeyourfuture/eslint-config-standard
```

Then create an [ESLint config file] and add this config:

```javascript
const cyf = require("@codeyourfuture/eslint-config-standard");

module.exports = [...cyf.configs.standard];
```

or using ES module syntax:

```javascript
import cyf from "@codeyourfuture/eslint-config-standard";

export default [...cyf.configs.standard];
```

Alternatively, for a slightly more permissive set of rules, you can use `cyf.configs.lax`.

You can also call `cyf.configure` with some rules to add/override your own settings:

```javascript
export default [...cyf.configure({
  // ...
})];
```

## Principles

 1. **Errors only** - don't teach learners to ignore *any* output, all rules should either be `"error"` or `"off"`
 2. **Maximise consistency** - where there are options (e.g. braces for single-line statements, parentheses around arrow function parameters), be consistent with the non-optional cases
 3. **Minimise change set size** - keep commits small so learners can focus on the important changes

## Rules

This config starts from the [ESLint] and [Stylistic] recommended rules then adds the following:

| Configuration| Rule | Setting | Principles/rationale |
|---|---|---|---|
| standard, lax | [`@stylistic/arrow-parens`][arrow-parens] | | 2, 3 |
| standard, lax | [`@stylistic/brace-style`][brace-style] | `"1tbs", { "allowSingleLine": false }` | |
| standard, lax | [`@stylistic/comma-dangle`][comma-dangle] | `"always-multiline"` | 3 |
| standard, lax | [`curly`][curly] | | 2 |
| standard | [`@stylistic/indent`][indent] | `"tab", { "SwitchCase": 1 }` | Tabs are [more accessible][why-tabs] |
| standard | [`@stylistic/linebreak-style`][linebreak-style] | `"unix"` | |
| standard, lax | [`@stylistic/no-trailing-spaces`][no-trailing-spaces] | | |
| standard, lax | [`no-unused-vars`][no-unused-vars] | `{ "ignoreRestSiblings": true }` | |
| standard, lax | [`no-var`][no-var] | | Stick with `let` and `const` for more predictable behaviour |
| standard, lax | [`@stylistic/object-curly-cpacing`][object-curly-spacing] | `"always"` | |
| standard, lax | [`@stylistic/operator-linebreak`][operator-linebreak] | `"before"` | |
| standard, lax | [`@stylistic/quote-pros`][quote-props] | `"as-needed"` | 3 |
| standard, lax | [`@stylistic/quotes`][quotes] | `"double", { "avoidEscape": true, "allowTemplateLiterals": false }` | More likely to need `'` inside a string than `"` |
| standard, lax | [`@stylistic/semi`][semi] | | Learners shouldn't have to memorise the [ASI rules] |

## Development

You can clone this repo and run `npm install` to install the development dependencies. Two scripts are provided:

  - `lint`: uses the version of ESLint installed as a dev dependency to lint `index.js` against its own rules.

  - `test:examples`: runs `bin/examples.sh` to test the configuration against the `pass.js` and `fail.js` examples
    in `examples/`. `pass.js` contains code that should pass linting according to the configuration, `fail.js`
    contains code that should fail linting.

  - `test:install`: runs `bin/test.sh` to create a package, installs ESLint (version defined by the required
    environment variable `ESLINT_VERSION`) and the current version of this configuration, then checks that there are
    no version conflicts and lints `index.js`. E.g. `ESLINT_VERSION=9 npm run test` will test that this configuration
    works with the latest version of ESLint 9.

  [arrow-parens]: https://eslint.style/rules/default/arrow-parens
  [ASI rules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion
  [brace-style]: https://eslint.style/rules/default/brace-style
  [comma-dangle]: https://eslint.style/rules/default/comma-dangle
  [curly]: https://eslint.org/docs/rules/curly
  [eslint]: https://eslint.org/
  [ESLint config file]: https://eslint.org/docs/latest/use/configure/configuration-files
  [indent]: https://eslint.style/rules/default/indent
  [linebreak-style]: https://eslint.style/rules/default/linebreak-style
  [no-trailing-spaces]: https://eslint.style/rules/default/no-trailing-spaces
  [no-unused-vars]: https://eslint.org/docs/rules/no-unused-vars
  [no-var]: https://eslint.org/docs/rules/no-var
  [object-curly-spacing]: https://eslint.style/rules/default/object-curly-spacing
  [operator-linebreak]: https://eslint.style/rules/default/operator-linebreak
  [quotes]: https://eslint.style/rules/default/quotes
  [semi]: https://eslint.style/rules/default/semi
  [SemVer]: https://semver.org/
  [stylistic]: https://eslint.style/
  [why-tabs]: https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/
