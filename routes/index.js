const Router = require('@koa/router');

const UserModel = require('../model/user');

const userRouter = new Router({
  prefix: '/user',
});

async function createUser(name, age) {
  const user = await UserModel.create({
    name,
    age,
  });
  return user;
}

userRouter.post('/add', async (ctx, next) => {
  const { name = '张飞', age = 12 } = ctx.request.body;
  if (typeof age !== 'number') {
    throw new TypeError('id type must bu number');
  }
  const res = await createUser(name, age);
  ctx.body = res;
});

module.exports = userRouter;
