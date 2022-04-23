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
