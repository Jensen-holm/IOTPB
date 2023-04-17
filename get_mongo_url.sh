#!/bin/bash

# Run the mongosh command and capture the output
mongosh_output=$(mongosh --norc --eval "printjson(db.runCommand({whatsmyuri: 1}))")

# Extract the MongoDB URL using a regular expression
mongodb_url=$(echo "$mongosh_output" | grep -o 'mongodb://[^[:space:]]\+')

# Print the MongoDB URL
echo "MongoDB URL: $mongodb_url"

