// Crear la instancia de sequelize con la conexión a la base de datos
const sequelize = require("./config/sequelize.js");
// Recuperar función de inicialización de modelos
const initModels = require("./models/init-models.js").initModels;

// Inicializar los modelos 
const models = initModels(sequelize);

// Recuperar el modelo platos
const Plato = models.platos;

async function consultaPlatos(){
    const filas = await Plato.findAll();
    console.log("Platos:", filas);
}

consultaPlatos();
