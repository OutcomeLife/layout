#!/bin/bash

GENNY_PROP_FILE=/usr/share/nginx/html/genny.properties.js

echo "module.exports = {"  > $GENNY_PROP_FILE

# update the genny.properties.js file with env

for i in `set | awk -F "=" '{print $1}' | grep ".*REACT_APP.*"`
do
PS1=`printf '%s\n' "${!i}"`
  echo "    $i: \""$PS1"\"" >> $GENNY_PROP_FILE
done

echo "}" >> $GENNY_PROP_FILE

nginx -g "daemon off;"