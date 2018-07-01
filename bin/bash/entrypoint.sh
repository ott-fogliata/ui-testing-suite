#!/bin/sh

sudo chown docker:docker -R  .
ls -l

if [ -n "$DEBUG" ] ; then
    npm run nightwatch-debug
else
    npm run nightwatch
fi
