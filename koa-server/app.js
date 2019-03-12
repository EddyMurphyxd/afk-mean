const Koa = require('koa');
const cors = require('@koa/cors');
const compress = require('koa-compress');
const bodyParser = require('koa-bodyparser');
const health = require('koa-ping');
const logger = require('koa-morgan');

const app = new Koa();

const MIDDLEWARES = [
  () => health(),
  () => cors(),
  () => logger('tiny'),
  () => compress(),
  () => bodyParser(),
];

MIDDLEWARES.forEach(middleware => app.use(middleware()));

module.exports = app;
