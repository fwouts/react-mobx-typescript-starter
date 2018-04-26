#!/bin/sh

set -e

cd client
yarn precommit
cd -

cd server
yarn precommit
cd -

echo "Ready to commit!"
