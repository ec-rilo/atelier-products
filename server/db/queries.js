module.exports = {
  "features": `SELECT *, 
                 (SELECT json_agg(tab) 
                   FROM (SELECT feature, value 
                     FROM features f WHERE f.product_id = p.id) AS tab) AS features 
               FROM products p 
                 WHERE p.id = $1`,

  "products": `SELECT * 
               FROM products 
                 WHERE id > $1 
                 ORDER BY id ASC 
                 LIMIT $2`,

  "related":  `SELECT array_agg(related_id) AS related 
               FROM related 
                 WHERE current_id = $1`,

  "styles": `SELECT id AS style_id, name, original_price, sale_price, default_style as "default?",
              (SELECT json_agg(
                json_build_object('url', url, 'thumbnail_url', thumbnail_url)) AS photos 
                  FROM photos 
                    WHERE style_id = st.id), 
              (SELECT json_object_agg("id", json_build_object('quantity', quantity, 'size', size)) AS skus 
                FROM skus 
                  WHERE style_id = st.id)
              FROM styles st 
                WHERE st.product_id = $1`
}