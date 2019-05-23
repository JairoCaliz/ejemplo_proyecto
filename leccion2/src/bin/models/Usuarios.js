const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
  nombre: String,
  apellido: String,
  password: String,
  email: String,
  telefono: Number,
  Usuarios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Grados"
    }
  ]
});

var Usuarios = mongoose.model("Usuarios", SongSchema);
module.exports = Usuarios;
