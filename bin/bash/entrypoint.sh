#!/bin/sh

if [ -n "$TESTFILE" ] ; then
    npm run nightwatch --UITest:testFile=${TESTFILE}
else
    npm run nightwatch
fi
