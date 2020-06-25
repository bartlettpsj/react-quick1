const Router = require('koa-router');
const messages = new Router({ prefix: '/messages' });
const _ = require('lodash');

const messagesdb = [
  { id: 1, message: 'Hello world' },
  { id: 2, message: 'Goodbye cruel world' },
  { id: 3, message: 'Happiness is a warm gun' }
]

messages.get('/:id', async (ctx, next) => {
  const id = parseInt(ctx.params.id);
  const message = _.find(messagesdb, { id });
  ctx.status = message ? 200 : 404;
  message && (ctx.body = message);
});

messages.get('/', async (ctx, next) => {
  ctx.body = messagesdb;
});

module.exports = messages;
