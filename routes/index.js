const UserModel = require('../model/user');

async function createUser(name, age) {
  const user = await UserModel.create({
    name,
    age,
  });
  return user;
}

module.exports = function (app) {
  app.use(async (ctx) => {
    ctx.body = 'hello word';
    const name = ctx.body.name || '张飞';
    const age = ctx.body.age || 12;
    const res = await createUser(name, age);
    return res;
  });

  return app;
};
