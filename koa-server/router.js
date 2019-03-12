const Router = require('koa-router');

const appRouter = new Router();

appRouter.get('/', ctx => {
  ctx.body = 'I am root!!!!!!!'
});

appRouter.get('/second_route', ctx => {
  ctx.body = 'I am second_route'
})

appRouter.post('/something', ctx => {
  ctx.body = {
    something: 'something here'
  }
});

module.exports = appRouter;