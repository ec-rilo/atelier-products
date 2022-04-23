#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$SCRIPT_DIR/../raw"

DB_USER="postgres"
DB_NAME="testdb"

echo 'Copying products...'
psql -U $DB_USER -d $DB_NAME -c "COPY products FROM '$SCRIPT_DIR/../raw/product.csv' DELIMITER ',' CSV HEADER;"

echo 'Copying features...'
psql -U $DB_USER -d $DB_NAME -c "COPY features FROM '$SCRIPT_DIR/../raw/features.csv' DELIMITER ',' CSV HEADER;"

echo 'Copying styles...'
psql -U $DB_USER -d $DB_NAME -c "COPY styles FROM '$SCRIPT_DIR/../raw/styles.csv' DELIMITER ',' CSV HEADER;"

echo 'Copying photos...'
psql -U $DB_USER -d $DB_NAME -c "COPY photos FROM '$SCRIPT_DIR/../raw/photos.csv' DELIMITER ',' CSV HEADER;"

echo 'Copying skus...'
psql -U $DB_USER -d $DB_NAME -c "COPY skus FROM '$SCRIPT_DIR/../raw/skus.csv' DELIMITER ',' CSV HEADER;"

echo 'Copying related...'
psql -U $DB_USER -d $DB_NAME -c "COPY related FROM '$SCRIPT_DIR/../raw/related.csv' DELIMITER ',' CSV HEADER;"