// Queries:

/**
 * 
 * @api {get} /products
 * SELECT * 
 * FROM products 
 *  WHERE id > (<page> * <page_size> )
 *    ORDER BY id ASC
 *    LIMIT <page_size>;
 * 
 * @api {get} /products/:id Get a product
 * SELECT id, name, 
 *  (SELECT json_agg(tab) FROM 
 *    (SELECT feature, value FROM features f WHERE f.product_id = p.id) AS tab) AS features 
 * FROM products p 
 *  WHERE p.id = <product_id>;
 * 
 * @api {get} /products/:product_id/styles Get all styles for a product
 * UNDEF
 * 
 * @api {get} /products/:product_id/related Get related products
 * SELECT array_agg(related_id) 
 * FROM related 
 *  WHERE current_id = <product_id>;
 * 
 */

const db = require('./db/db-connection');
const queries = require('./db/queries');

module.exports = {
  products: (page, page_size) => db.any(queries.products, [page, page_size]),
  features: (product_id) => db.any(queries.features, [product_id]),
  styles: (product_id) => db.any(queries.styles, [product_id])
    .then(data => ({ product_id: 1, results: data })),
  related: (product_id) => db.any(queries.related, [product_id])
    .then(data => data[0].related),
}