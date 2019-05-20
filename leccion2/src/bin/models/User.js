const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
  nombre: String,
  password: String,
  email: String,
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
