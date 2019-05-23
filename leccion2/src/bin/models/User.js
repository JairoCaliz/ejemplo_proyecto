const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nombre: String,
  password: String,
  email: String,
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
