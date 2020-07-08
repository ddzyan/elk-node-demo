const Router = require('@koa/router');
const UserController = require('../controller/user');
const UserModel = require('../model/user');

const userRouter = new Router();

userRouter.post('/add', UserController.addUser);

module.exports = userRouter;
