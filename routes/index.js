const Router = require('@koa/router');

const apm = require('../lib/apm')();
const UserModel = require('../model/user');

const userRouter = new Router({
  //prefix: '/user',
});

async function createUser(name, age) {
  const user = await UserModel.create({
    name,
    age,
  });
  return user;
}

userRouter.post('/add', async (ctx, next) => {
  try {
    apm.setTransactionName('POST /add');
    const { name = '张飞', age = 12 } = ctx.request.body;
    if (typeof age !== 'number') {
      throw new TypeError('id type must bu number');
    }
    const res = await createUser(name, age);
    ctx.status = 200;
    ctx.body = res;
  } catch (error) {
    apm.captureError(error);
    ctx.status = 500;
    ctx.body = error.message;
  }
 
});

module.exports = userRouter;
