// Import the service layer for handling type-related operations
const tipoService = require("../services/tipoService");
const Respuesta = require("../utils/respuesta");

class TipoController {
  // Handles retrieval of all types
  async getAllTipo(req, res) {
    try {
      const data = await tipoService.getAllTipo(); // Fetch all types from the service
      res.json(Respuesta.exito(data, "Datos de tipos recuperados"));
    } catch (err) {
      // Handle errors during the service call
      res
        .status(500)
        .json(
          Respuesta.error(
            null,
            `Error al recuperar los datos: ${req.originalUrl}`
          )
        );
    }
  }

  // Handles retrieval of a single type by its ID (implementation pending)
  async getTipoById(req, res) {
    // Implementa la lógica para obtener un dato por ID (pendiente de implementar)
    const idtipo = req.params.idtipo;
    try {
      const data = await tipoService.getTipoById(idtipo); // Fetch all types from the service
      if(data.length > 0 ){
        res.json(Respuesta.exito(data, "Tipo recuperado"));
      } else {
        res.status(404).json(Respuesta.error(null, "Tipo no encontrado"));
      }
      
    } catch (err) {
      // Handle errors during the service call
      res
        .status(500)
        .json(
          Respuesta.error(
            null,
            `Error al recuperar los datos: ${req.originalUrl}`
          )
        );
    }
  }

  // Handles creation of a new type 
  async createTipo(req, res) {
    // Implementa la lógica para crear un nuevo dato
    const tipo = req.body;
    try {
      const idtipo = await tipoService.createTipo(tipo); 
      // Relleno en el objeto que tenía el idtipo asignado
      // al insertar en la base de datos
      tipo.idtipo = idtipo;
      res.status(201).json(Respuesta.exito(tipo, "Tipo insertado"));
    } catch (err) {
      // Handle errors during the service call
      res
        .status(500)
        .json(
          Respuesta.error(
            null,
            `Error al recuperar los datos: ${req.originalUrl}`
          )
        );
    }

  }

  // Handles updating of a type by its ID (implementation pending)
  async updateTipo(req, res) {
    const tipo = req.body; // Recuperamos datos para actualizar
    const idtipo = req.params.idtipo; // dato de la ruta
    try {
      const numFilas = await tipoService.updateTipo(tipo); 

      if(numFilas == 0){ // No se ha encontrado lo que se quería actualizar
        res.status(404).json(Respuesta.error(null, "No encontrado: " + idtipo))
      } else{
        // Al dar status 204 no se devuelva nada
        res.status(204).json(Respuesta.exito(null, "Tipo actualizado"));
      }
     
    } catch (err) {
      // Handle errors during the service call
      res
        .status(500)
        .json(
          Respuesta.error(
            null,
            `Error al actualizar los datos: ${req.originalUrl}`
          )
        );
    }

  }

  // Handles deletion of a type by its ID (implementation pending)
  async deleteTipo(req, res) {
   
    const idtipo = req.params.idtipo;
    try {
      const numFilas = await tipoService.deleteTipo(idtipo); 
      if(numFilas == 0){ // No se ha encontrado lo que se quería borrar
        res.status(404).json(Respuesta.error(null, "No encontrado: " + idtipo))
      } else{
        res.status(204).json(Respuesta.exito(null, "Tipo eliminado"));
      }
     
    } catch (err) {
      // Handle errors during the service call
      res
        .status(500)
        .json(
          Respuesta.error(
            null,
            `Error al recuperar los datos: ${req.originalUrl}`
          )
        );
    }
  }
}

module.exports = new TipoController();

// Structure of result (MySQL)
// {
//   fieldCount: 0,
//   affectedRows: 1, // Number of rows affected by the query
//   insertId: 1,     // ID generated by the insertion operation
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0   // Number of rows changed by the query
// }
