const Promise = require('bluebird');

const util = require('util');

const initOptions = {
  promiseLib: Promise,
  capSQL: true,
};
const pgp = require('pg-promise')(initOptions);

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'testdb',
  user: 'postgres',
  password: 'postgres',
}

module.exports = pgp(cn);