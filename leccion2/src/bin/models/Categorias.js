const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriasSchema = new Schema({
  name1: String,
  name2: String,
  descripcion1: String,
  descripcion2: String,
});

var Categorias = mongoose.model("Categorias", CategoriasSchema);
module.exports = Categorias;