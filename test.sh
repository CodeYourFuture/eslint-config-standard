#! /usr/bin/env bash

set -euo pipefail

# Initial setup
echo "Testing with ESLint v$ESLINT_VERSION"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEST_DIR="$HERE/test"
rm -rf "$TEST_DIR"

# Get current package version and create tarball to install from
pushd "$HERE"
  PACKAGE_VERSION=$(node -p 'require("./package.json").version')
  npm pack
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
  "scripts": {
    "lint": "eslint"
  },
  "eslint": {
    "extends": ["@codeyourfuture/standard"]
  }
}
EndOfMessage

# Make sure ESLint and the config install and lint without issues
pushd "$TEST_DIR"
  npm install --save-dev "eslint@$ESLINT_VERSION"
  npm install --save-dev "$HERE/codeyourfuture-eslint-config-standard-$PACKAGE_VERSION.tgz"
  npm ls --depth 0  # see https://stackoverflow.com/a/63177495/3001761

  npm run lint -- --version
  npm run lint -- ../index.js
popd

# Tidy up
rm -rf "$TEST_DIR"
rm -f "$HERE/codeyourfuture-eslint-config-standard-$PACKAGE_VERSION.tgz"
