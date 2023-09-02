const mongoose = require("mongoose");
//Si hay ECONN REFUSE:
//mongoose.connect("mongodb://127.0.0.1:27017/costarica", {
mongoose.connect("mongodb://localhost/costarica", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then( () => console.log("Conexión a Mongo lista") )
  .catch(err => console.log("Error en conexión", err)); 