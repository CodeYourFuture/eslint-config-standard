#! /usr/bin/env bash
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXAMPLES="$(cd "$HERE/../examples" && pwd)"
ESLINT="$(cd "$HERE/../node_modules/.bin" && pwd)/eslint"

for DIR in $EXAMPLES/*; do
  echo "checking $DIR"

  if "$ESLINT" --config "$DIR/eslint."*js "$DIR/pass."*js; then
    echo "$DIR pass case - success"
  else
    echo "$DIR pass case - failure"
    exit 1
  fi

  if "$ESLINT" --config "$DIR/eslint."*js "$DIR/fail."*js; then
    echo "$DIR fail case - failure"
    exit 1
  else
    echo "$DIR fail case - success"
  fi
done
