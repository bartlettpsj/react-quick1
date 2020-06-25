const Router = require('koa-router');
const users = new Router({ prefix: '/users' });

const userdb = [
  { id: 1, name: 'john', greeting: 'get outta my hair' },
  { id: 2, name: 'paul', greeting: 'let it be' },
  { id: 3, name: 'george', greeting: 'peace man' },
  { id: 4, name: 'ringo', greeting: 'love and peace' }
];

users.get('/:id', async (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = { id, name: 'Paul', greeting: 'Hello' }
});

// Return all users
users.get('/', async (ctx, next) => {
  ctx.body = userdb;
});

module.exports = users;
