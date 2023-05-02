const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = '/api/usuarios'

    // Middlewares
    this.middlewares();

    // Parseo y lectura de boddy
    this.app.use( express.json())

    // Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {

    // CORS
    this.app.use(cors())

    // Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/users.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started at port ${this.port}`);
    });
  }
}

module.exports = Server;
