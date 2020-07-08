const UserModel = require('../model/user');

module.exports = {
  async addUser(name, age){
    const user = await UserModel.create({
      name,
      age,
    });
    return user;
  }
}