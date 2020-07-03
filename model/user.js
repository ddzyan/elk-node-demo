const mongoose = require('mongoose');
const { model } = require('../lib/db');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: String,
  age: Number,
});

adminSchema.index({ id: 1 });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
