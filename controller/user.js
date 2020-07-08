const UserService = require('../service/user');
const apm = require('../lib/apm')();
module.exports = {
  async addUser(ctx, next) {
    try {
      apm.setTransactionName(`${ctx.method} ${ctx.url}`);
      const { name = '张飞', age = 12 } = ctx.request.body;
      if (typeof age !== 'number') {
        throw new TypeError('id type must bu number');
      }
      const res = await UserService.addUser(name, age);
      ctx.status = 200;
      ctx.body = res;
    } catch (error) {
      //apm.captureError(error);
      ctx.status = 500;
      ctx.body = error.message;
    }
  },
};
