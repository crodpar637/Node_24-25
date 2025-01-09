md proyecto

cd proyecto

npm init -y

npm i mysql2 sequelize sequelize-auto

// Configurar ./config/sequelize.js y ./config/sequelize-auto.js con parámetros de bbdd

// Probar la conexion
node ./config/sequelize.js

//Generar los modelos
node ./config/sequelize-auto.js