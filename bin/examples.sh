#! /usr/bin/env bash
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXAMPLES="$HERE/../examples"
ESLINT="$HERE/../node_modules/.bin/eslint"

for DIR in $EXAMPLES/*; do
  echo "checking $DIR"

  if "$ESLINT" "$DIR/pass.js"; then
    echo "$DIR pass.js success"
  else
    echo "$DIR pass.js failure"
    exit 1
  fi

  if "$ESLINT" "$DIR/fail.js"; then
    echo "$DIR fail.js failure"
    exit 1
  else
    echo "$DIR fail.js success"
  fi
done
