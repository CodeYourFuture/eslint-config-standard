# CYF ESLint Configuration

[![License](https://img.shields.io/npm/l/@codeyourfuture/eslint-config-standard.svg)](https://github.com/CodeYourFuture/eslint-config-standard/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CodeYourFuture/eslint-config-standard.svg?branch=master)](https://travis-ci.org/CodeYourFuture/eslint-config-standard)
[![NPM Version](https://img.shields.io/npm/v/@codeyourfuture/eslint-config-standard.svg)](https://www.npmjs.com/package/@codeyourfuture/eslint-config-standard)

A standard ESLint configuration for all CYF examples/projects.

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

## Principles

 1. **Errors only** - don't train students to ignore *any* output, all rules should either be `"error"` or `"off"`
 2. **Maximise consistency** - where there are options (e.g. braces for single-line statements, parentheses around arrow function parameters), be consistent with the non-optional cases
 3. **Minimise change set size** - keep commits small so students can focus on the important changes

## Rules

This config starts from [`eslint:recommended`][1] then adds the following rules:

| Rule | Config | Principles/rationale |
|------|--------|----------------------|
| [arrow-parens] | | 2, 3 |
| [brace-style] | `"1tbs", { "allowSingleLine": false }` | |
| [comma-dangle] | `"always-multiline"` | 3 |
| [curly] | | 2 |
| [indent] | `2` | |
| [linebreak-style] | `"unix"` | |
| [no-trailing-spaces] | | |
| [no-unused-vars] | `{ "ignoreRestSiblings": true }` | |
| [no-var] | | Stick with `let` and `const` for more predictable behaviour |
| [object-curly-spacing] | `"always"` | |
| [operator-linebreak] | `"before"` | |
| [quotes] | `"double"` | More likely to need `'` inside a string than `"` |
| [semi] | | Students shouldn't have to memorise the [ASI rules] |

  [1]: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended

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
