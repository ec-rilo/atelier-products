CREATE TABLE IF NOT EXISTS products (
  id SERIAl PRIMARY KEY,
  name TEXT,
  slogan TEXT,
  description TEXT,
  category TEXT,
  default_price INTEGER
);

CREATE TABLE IF NOT EXISTS features (
  product_id INTEGER,
  feature TEXT,
  value TEXT,
  CONSTRAINT product
    FOREIGN KEY(product_id) 
	    REFERENCES products(id),
  PRIMARY KEY(product_id, feature)
);

CREATE TABLE IF NOT EXISTS styles (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  name TEXT,
  sale_price INTEGER,
  original_price INTEGER,
  default_style BOOLEAN,
  CONSTRAINT product
    FOREIGN KEY(product_id) 
	    REFERENCES products(id)
);


CREATE TABLE IF NOT EXISTS photos (
  style_id INTEGER,
  url TEXT,
  thumbnail_url TEXT,
  CONSTRAINT style
    FOREIGN KEY(style_id) 
	    REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER,
  size TEXT,
  quantity INTEGER,
  CONSTRAINT style
    FOREIGN KEY(style_id) 
	    REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS related (
  current_id INTEGER,
  related_id INTEGER,
  CONSTRAINT current
    FOREIGN KEY(current_id) 
      REFERENCES products(id),
  CONSTRAINT related
    FOREIGN KEY(related_id) 
      REFERENCES products(id),
  PRIMARY KEY(current_id, related_id)
);

CREATE INDEX IF NOT EXISTS photos_style_id
  ON photos(style_id);

CREATE INDEX IF NOT EXISTS features_product_id
  ON features(product_id);

CREATE INDEX IF NOT EXISTS skus_style_id
  ON skus(style_id);

CREATE INDEX IF NOT EXISTS skus_product_id
  ON skus(id);

CREATE INDEX IF NOT EXISTS styles_product_id
  ON styles(product_id);