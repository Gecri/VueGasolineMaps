const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Scraping= require('./Scrapping/gasolinerasScraping');
const User = require('./userController');
const Gasolineras = require('./gasolinera');
const verifyToken = require('./verifyToke');

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
  origin: 'http://localhost:8080', // Origen definido
}));


app.use(express.json());

app.get('/dataGasolinera',async (req,res)=>{
  try {
    const Gas= await Gasolineras.find();
    
    res.send(Gas).status(200);
  } catch (error) {
    console.error('Error al buscar correos electrónicos de usuarios:', error);
    res.status(500).json({ error: 'Error al buscar correos electrónicos de usuarios' });
  }
})

app.post('/register', User.create);
app.post('/login', User.login);


//Scrapingc
// Llama a la función importadad
Scraping();
//console.log(a)
// // Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
