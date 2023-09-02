const Estudiante = require("../models/estudiante.model");

//Regrese una lista de objetos o documentos de Estudante
module.exports.muestraEstudiantes = (req, res) => {
    //db.estudiantes.find()
    Estudiante.find()
        .then(todosEstudiantes => res.json({estudiantes: todosEstudiantes}))
        .catch(err => res.json({message: "Algo salio mal", error: err}));
};

//Me regresa un doc de estudiantes en base al Id que se reciba en la URL
module.exports.muestraUnEstudiante = (req, res) => {
    //db.estudiantes.find({_id: ObjectId('asdadasssa')})
    Estudiante.findOne({_id:req.params.id})
        .then(unEstudiante => res.json({estudiantes: unEstudiante}))
        .catch(err => res.json({message: "Algo salio mal", error: err}));
}

//me crea un nuevo estudiantes en base alo que recibe en body
module.exports.creaEstudiante = (req, res) => {
    //db.estudientes.insertOne({nombre:"Elena"...})
    Estudiante.create(req.body)
        .then(nuevoEstudiante => res.json({estudiante: nuevoEstudiante}))
        .catch(err => res.json({message: "Algo salio mal", error: err}));
};

//me actualiza el el estudiante en base a lo que reciba en body y lo haga solamente con el ID recibido en URL

module.exports.actualizaEstudiante = (req, res) =>{
    Estudiante.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then(estudianteActualizado => res.json({estudiante: estudianteActualizado}))
        .catch(err => res.json({message: "Algo salio mal", error: err}));
};


module.exports.borrarEstudiante = (req, res) => {
    Estudiante.deleteOne( {_id: req.params.id} )
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Algo salio mal", error: err}));
}