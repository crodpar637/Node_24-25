// Importamos la configuración de la base de datos y el utilitario para loguear errores
const db = require("../config/dbConfig");
const { logErrorSQL } = require("../utils/logger");

class TipoModel {
  // Método para obtener todos los tipos
  async getAllTipo() {
    const query = "SELECT * FROM tipo";
    try {
      // Usamos await para esperar la respuesta de la consulta
      const [result] = await db.promise().query(query); // Usamos promise() para que query sea compatible con promesas
      return result; // Retornamos el resultado de la consulta
    } catch (err) {
      // Si ocurre un error, lo registramos y lo lanzamos
      logErrorSQL(err);
      throw err;
    }
  }
  async getTipoById(idtipo) {
    const query = "SELECT * FROM tipo WHERE idtipo = ?";
    try {
      // Usamos await para esperar la respuesta de la consulta
      const [result] = await db.promise().query(query,[idtipo]); // Usamos promise() para que query sea compatible con promesas
      return result; // Retornamos el resultado de la consulta
    } catch (err) {
      // Si ocurre un error, lo registramos y lo lanzamos
      logErrorSQL(err);
      throw err;
    }
  }

  async createTipo(tipo) {
    const query =
      "INSERT INTO `tipo`(`idtipo`, `tipo`, `descripcion`) VALUES (null ,?,?)";
    const values = [
      tipo.tipo,
      tipo.descripcion
    ];

    try {
      // Ejecutamos la consulta con los valores proporcionados
      // Usamos await para obtener los datos de la consulta
      const [result] = await db.promise().query(query,values); // Usamos promise() para que query sea compatible con promesas
      return result.insertId; // Retornamos el resultado de la inserción
    } catch (err) {
      logErrorSQL(err);
      throw err; // Si hay un error, lo lanzamos
    }
  }

  async updateTipo(tipo){
    const query =
      "UPDATE tipo  SET `tipo` = ? , `descripcion` = ? WHERE idtipo = ?";
    const values = [
      tipo.tipo,
      tipo.descripcion,
      tipo.idtipo
    ];

    try {
      // Ejecutamos la consulta con los valores proporcionados
      // Usamos await para obtener los datos de la consulta
      const [result] = await db.promise().query(query,values); 

      return result.affectedRows;
    } catch (err) {
      logErrorSQL(err);
      throw err; // Si hay un error, lo lanzamos
    }
  }

  async deleteTipo(idtipo){
    const query =
      "DELETE FROM tipo WHERE idtipo = ?";
    const values = [ idtipo ];

    try {
      // Ejecutamos la consulta con los valores proporcionados
      // Usamos await para obtener los datos de la consulta
      const [result] = await db.promise().query(query,values); 
        
      return result.affectedRows;

    } catch (err) {
      logErrorSQL(err);
      throw err; // Si hay un error, lo lanzamos
    }
  }
  // Otros métodos del modelo pueden ser añadidos aquí...
}

// Exportamos una instancia única de TipoModel
module.exports = new TipoModel();
