const mongoose = require("mongoose");

const EsquemaEstudiante = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    stack: String
}); 

const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

module.exports = Estudiante;