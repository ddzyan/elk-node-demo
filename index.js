// apm模块必须在koa模块引起前进行实例化，否则会报错
require('./lib/apm')();

const Koa = require('koa');
const parser = require('koa-bodyparser');

const userRouter = require('./routes');
require('./lib/db');

const app = new Koa();
app.use(parser());
app.use(userRouter.routes());
app.listen(3000, () => {
  console.log('service sussess');
});
