const koaAwaitBreakpoint = require('koa-await-breakpoint')({
  name: 'api',
  files: ['./routes/*.js'],
  store: require('./tools/logger'),
  requestIdPath: 'traceId',
  filter: {
    ctx: ['state', 'params'],
    request: ['method', 'path', 'header', 'query', 'body'],
    response: ['status', 'body'],
  },
});

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const routes = require('./routes');

const app = new Koa();
app.use(bodyParser());
// Generally, above other middlewares
app.use(koaAwaitBreakpoint);
routes(app);
app.listen(3000, () => {
  console.log('service sussess');
});
