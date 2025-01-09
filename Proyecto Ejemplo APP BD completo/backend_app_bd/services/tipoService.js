// Importamos el modelo de tipo
const tipoModel = require("../models/tipoModel");

// Definimos la clase TipoService para gestionar los servicios relacionados con "tipo"
class TipoService {
  // Método para obtener todos los tipos usando async/await
  async getAllTipo() {
    try {
      // Utilizamos await para esperar la respuesta del modelo
      const data = await tipoModel.getAllTipo();

      // Devolvemos los datos obtenidos
      return data;
    } catch (err) {
      // Si ocurre un error, lo lanzamos
      throw err;
    }
  }

  async getTipoById(idtipo) {
    try {
      // Utilizamos await para esperar la respuesta del modelo
      const data = await tipoModel.getTipoById(idtipo);

      // Devolvemos los datos obtenidos
      return data;
    } catch (err) {
      // Si ocurre un error, lo lanzamos
      throw err;
    }
  }
  async createTipo(tipo) {
    try {
        // Utilizamos await para esperar la respuesta del modelo
        const idtipo = await tipoModel.createTipo(tipo);
  
        // Devolvemos los datos obtenidos
        return idtipo;
      } catch (err) {
        // Si ocurre un error, lo lanzamos
        throw err;
      }
  }

  async updateTipo(tipo){
    try {
        
      const numFilas = await tipoModel.updateTipo(tipo);
      
      return numFilas;
      } catch (err) {
        // Si ocurre un error, lo lanzamos
        throw err;
      }
  }

  async  deleteTipo(idtipo){
    try {
        
        const numFilas = await tipoModel.deleteTipo(idtipo);
        return numFilas;
  
      } catch (err) {
        // Si ocurre un error, lo lanzamos
        throw err;
      }
  }
  // Otros métodos del servicio podrían ser definidos aquí
}

// Exportamos una instancia única de TipoService
module.exports = new TipoService();
