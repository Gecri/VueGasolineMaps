const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./userController');

const app = express();
const port = 3000; // El puerto donde se ejecutará tu backend

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
  origin: 'http://localhost:8080', // Aquí defines el origen permitido
}));

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Ruta para manejar el registro de usuarios
app.post('/register', User.create);
app.post('/login', User.login);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
