# ETL process

 1. Run db_init.sql in postgres
    1. 
       1. `psql -U postgres -d <database_name> "\i '<path_to_db_init.sql>'"`
 2. in the root directory, run `mkdir raw`
    1. in the raw folder ensure these files exist:
       1. product.csv
          1. `id,name,slogan,description,category,default_price`
       2. features.csv
          1. `product_id,feature,value`
       3. styles.csv
          1. `id,product_id,name,sale_price,original_price,default_style`
       4. photos.csv
          1. `style_id,url,thumbnail_url`
       5. skus.csv
          1. `id,style_id,size,quantity`
       6. related.csv
          1. `current_id,related_id`
 3. run load.sh
    1. Make sure to set your database name in DB_NAME