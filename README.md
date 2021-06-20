# CYF ESLint Configuration

[![License](https://img.shields.io/npm/l/@codeyourfuture/eslint-config-standard.svg)](https://github.com/CodeYourFuture/eslint-config-standard/blob/master/LICENSE)
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

Then create an [ESLint config file] and add this config to the `"extends"` section:

```json
{
  "extends": ["@codeyourfuture/standard"]
}
```

Alternatively, for a slightly more permissive set of rules, you can extend `@codeyourfuture/eslint-config-standard/lax`.

## Principles

 1. **Errors only** - don't train students to ignore *any* output, all rules should either be `"error"` or `"off"`
 2. **Maximise consistency** - where there are options (e.g. braces for single-line statements, parentheses around arrow function parameters), be consistent with the non-optional cases
 3. **Minimise change set size** - keep commits small so students can focus on the important changes

## Rules

This config starts from [`eslint:recommended`][1] then adds the following rules:

| Configuration| Rule | Setting | Principles/rationale |
|---|---|---|---|
| standard, lax | [arrow-parens] | | 2, 3 |
| standard, lax | [brace-style] | `"1tbs", { "allowSingleLine": false }` | |
| standard, lax | [comma-dangle] | `"always-multiline"` | 3 |
| standard, lax | [curly] | | 2 |
| standard | [indent] | `"tab"` | Tabs are [more accessible][2] |
| standard | [linebreak-style] | `"unix"` | |
| standard, lax | [no-trailing-spaces] | | |
| standard, lax | [no-unused-vars] | `{ "ignoreRestSiblings": true }` | |
| standard, lax | [no-var] | | Stick with `let` and `const` for more predictable behaviour |
| standard, lax | [object-curly-spacing] | `"always"` | |
| standard, lax | [operator-linebreak] | `"before"` | |
| standard, lax | [quotes] | `"double", { "avoidEscape": true, "allowTemplateLiterals": false }` | More likely to need `'` inside a string than `"` |
| standard, lax | [semi] | | Students shouldn't have to memorise the [ASI rules] |

## Development

You can clone this repo and run `npm install` to install the development dependencies. Two scripts are provided:

  - `lint`: uses the version of ESLint installed as a dev dependency to lint `index.js` against its own rules.

  - `test:examples`: runs `bin/examples.sh` to test the configuration against the `pass.js` and `fail.js` examples
    in `examples/`. `pass.js` contains code that should pass linting according to the configuration, `fail.js`
    contains code that should fail linting.

  - `test:install`: runs `bin/test.sh` to create a package, installs ESLint (version defined by the required
    environment variable `ESLINT_VERSION`) and the current version of this configuration, then checks that there are
    no version conflicts and lints `index.js`. E.g. `ESLINT_VERSION=6 npm run test` will test that this configuration
    works with the latest version of ESLint 6.

  [1]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
  [2]: https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/

  [arrow-parens]: https://eslint.org/docs/rules/arrow-parens
  [ASI rules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion
  [brace-style]: https://eslint.org/docs/rules/brace-style
  [comma-dangle]: https://eslint.org/docs/rules/comma-dangle
  [curly]: https://eslint.org/docs/rules/curly
  [ESLint config file]: https://eslint.org/docs/user-guide/configuring
  [indent]: https://eslint.org/docs/rules/indent
  [linebreak-style]: https://eslint.org/docs/rules/linebreak-style
  [no-trailing-spaces]: https://eslint.org/docs/rules/no-trailing-spaces
  [no-unused-vars]: https://eslint.org/docs/rules/no-unused-vars
  [no-var]: https://eslint.org/docs/rules/no-var
  [object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
  [operator-linebreak]: https://eslint.org/docs/rules/operator-linebreak
  [quotes]: https://eslint.org/docs/rules/quotes
  [semi]: https://eslint.org/docs/rules/semi
  [SemVer]: https://semver.org/
