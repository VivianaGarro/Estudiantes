const EstudianteController = require("../controllers/estudiante.controller");

module.exports = app => {

    app.get("/api/estudiantes/", EstudianteController.muestraEstudiantes);
    app.get("/api/estudiantes/:id", EstudianteController.muestraUnEstudiante);
    app.post("/api/estudiantes/", EstudianteController.creaEstudiante);
    app.put("/api/estudiantes/:id", EstudianteController.actualizaEstudiante);
    app.delete("/api/estudiantes/:id", EstudianteController.borrarEstudiante);

}