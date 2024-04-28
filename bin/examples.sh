#! /usr/bin/env bash
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXAMPLES="$(cd "$HERE/../examples" && pwd)"
ESLINT="$(cd "$HERE/../node_modules/.bin" && pwd)/eslint"

for DIR in $EXAMPLES/*; do
  FLAT="$([[ -f "$DIR/eslint.config.js" ]] && echo 'true' || echo 'false')"
  CONFIG="$DIR/$([[ "$FLAT" = 'true' ]] && echo 'eslint.config.js' || echo '.eslintrc')"

  echo "checking $DIR (flat=$FLAT)"

  if ESLINT_USE_FLAT_CONFIG="$FLAT" "$ESLINT" --config "$CONFIG" "$DIR/pass.js"; then
    echo "$DIR pass.js success"
  else
    echo "$DIR pass.js failure"
    exit 1
  fi

  if ESLINT_USE_FLAT_CONFIG="$FLAT" "$ESLINT" --config "$CONFIG" "$DIR/fail.js"; then
    echo "$DIR fail.js failure"
    exit 1
  else
    echo "$DIR fail.js success"
  fi
done
