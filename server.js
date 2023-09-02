const express = require('express');
const app = express();

//inicializamos BD
require('./server/config/mongoose.config')

//para usar el json y obtener datos ed la URL
app.use(express.json(), express.urlencoded({ extended: true }));

//Importar rutas
const misRutas = require("./server/routes/estudiante.routes");
misRutas(app);

//ejecutamos el server
app.listen(8000, ()=> {
    console.log("Servidor corriendo");
})


