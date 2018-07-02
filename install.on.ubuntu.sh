#!/usr/bin/env bash

if [ "$(id -u)" != "0" ]; then
        echo "Sorry, you are not root".
        exit 1
fi
./bin/bash/sample-setup.sh
exit 1