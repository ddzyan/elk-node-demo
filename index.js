const KoaAwaitBreakpoint = require('koa-await-breakpoint');

const Koa = require('koa');
const parser = require('koa-body');

const userRouter = require('./routes');
require('./lib/db');

const app = new Koa();
app.use(parser());
app.use(
  KoaAwaitBreakpoint({
    name: 'api',
    files: ['./routes/*.js'],
    store: require('./tools/logger'),
    filter: {
      ctx: ['state', 'params'],
      request: ['method', 'path', 'header', 'query', 'body'],
      response: ['status', 'body'],
    },
  })
);
app.use(userRouter.routes());
app.listen(3000, () => {
  console.log('service sussess');
});
