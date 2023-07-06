#! /usr/bin/env bash

set -euo pipefail

# Initial setup
echo "Testing with ESLint v$ESLINT_VERSION"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACK="${PACK:-}"
ROOT_DIR="$HERE/.."
TEST_DIR="$ROOT_DIR/test"
rm -rf "$TEST_DIR"

# Get current package version and create tarball to install from
pushd "$ROOT_DIR"
  PACKAGE_VERSION=$(node -p 'require("./package.json").version')
  if [[ ! "$PACK" = 'false' ]]; then
    npm pack
  fi
popd

# Create a basic test package with no warnings
mkdir -p "$TEST_DIR"
cat > "$TEST_DIR/package.json" <<- EndOfMessage
{
  "name": "test-package",
  "description": "Just a dummy package",
  "version": "0.0.1",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/codeyourfuture/eslint-config-standard.git"
  },
  "eslintConfig": {
    "env": {
      "node": true
    },
    "extends": "@codeyourfuture/eslint-config-standard/lax"
  },
  "scripts": {
    "lint": "eslint"
  }
}
EndOfMessage
cp $ROOT_DIR/*.js $TEST_DIR

# Make sure ESLint and the config install and lint without issues
pushd "$TEST_DIR"
  npm install --save-dev "eslint@$ESLINT_VERSION"
  npm install --save-dev "$ROOT_DIR/codeyourfuture-eslint-config-standard-$PACKAGE_VERSION.tgz"
  npm ls --depth 0  # see https://stackoverflow.com/a/63177495/3001761

  npm run lint -- --version
  npm run lint -- *.js
popd

# Tidy up
rm -rf "$TEST_DIR"
if [[ ! "$PACK" = 'false' ]]; then
  rm -f "$ROOT_DIR/codeyourfuture-eslint-config-standard-$PACKAGE_VERSION.tgz"
fi
