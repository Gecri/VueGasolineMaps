const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const Scraping= require('./Scrapping/gasolinerasScraping')
const User = require('./userController');


const app = express();
const port = 3000; 

// Conexión a la base de datos
mongoose
  .connect('mongodb+srv://Alejandro:1111@databasegasweb.k6vtmxl.mongodb.net/a?retryWrites=true&w=majority&appName=DatabaseGasWeb')
  .then(() => {
    console.log("Se conectó correcamente");
  })
  .catch((e) => {
    console.log("Error en la conexión", e);
  });

// Configuración de CORS para permitir solicitudes desde el front-end
app.use(cors({
  origin: 'http://localhost:8081', // Aquí defines el origen permitido
}));


app.use(express.json());


app.post('/register', User.create);
app.post('/login', User.login);

//Scraping
//clScraping(); // Llama a la función importada

// // Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
