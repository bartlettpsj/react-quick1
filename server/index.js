// Very simple Koa server

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router({ prefix: '/api/v1' });

// Different end-point API's
const messages = require('./messages');
const users = require('./users');

router.use(users.routes(), messages.routes());

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(5000);
