const handlers = require('./handlers');

module.exports.products = (req, res) => {
  page = req.query.page - 1 || 0;
  page_size = req.query.page_size || 10;

  handlers.products(page * page_size, page_size)
    .then(data => res.json(data))
    .catch(err => res.status(500).end(err));
}

module.exports.features = (req, res) => {
  handlers.features(req.params.product_id)
    .then(data => res.json(data))
    .catch(err => res.status(500).end(err));
}

module.exports.styles = (req, res) => {
  handlers.styles(req.params.product_id)
    .then(data => res.json(data))
    .catch(err => res.status(500).end(err));
}

module.exports.related = (req, res) => {
  handlers.related(req.params.product_id)
    .then(data => res.json(data))
    .catch(err => res.status(500).end(err));
}