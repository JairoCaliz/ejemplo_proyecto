const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradosSchema = new Schema({
  name1: String,
  name2: String,
  descripcion1: String,
  descripcion2: String,
});

var Grados = mongoose.model("Grados", GradosSchema);
module.exports = Grados;