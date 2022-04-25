var http = require('http');
var https = require('https');

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const express = require('express');
const app = express();

/* Middleware */
app.use(express.json());

/* Helpers */
const routes = require('./routes');

/* Routes */
app.get('/products', routes.products);

app.get('/products/:product_id', routes.features);

app.get('/products/:product_id/styles', routes.styles);

app.get('/products/:product_id/related', routes.related);

/* Start server */
const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port http://localhost:${port}/`));

module.exports.app = app;
module.exports.server = server;