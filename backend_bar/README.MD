md proyecto

cd proyecto

npm init -y

### Instalar nodemon 
npm install --save-dev nodemon

### Crear un script para desarrollo en package.json
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

npm i mysql2 sequelize sequelize-auto

// Configurar ./config/sequelize.js y ./config/sequelize-auto.js con parámetros de bbdd

// Probar la conexion
node ./config/sequelize.js

//Generar los modelos
node ./config/sequelize-auto.js