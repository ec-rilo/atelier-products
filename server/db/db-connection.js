const Promise = require('bluebird');

const util = require('util');

require('dotenv').config()

const initOptions = {
  promiseLib: Promise,
  capSQL: true,
};
const pgp = require('pg-promise')(initOptions);

const cn = {
  host:     process.env.HOST     || 'localhost',
  port:     process.env.DB_PORT  || 5432,
  database: process.env.DB       || 'atelier',
  user:     process.env.DB_USER  || 'postgres',
  password: process.env.DB_PASS  || 'postgres',
}

module.exports = pgp(cn);
