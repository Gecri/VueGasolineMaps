const puppeteer =  require('puppeteer')
const GasolineraShema = require('../gasolinera');

const a=async () => {
    // Iniciar el navegador y abrir una nueva pestaña
    const browser = await puppeteer.launch({
        headless:'new'
    }
    );
    const page = await browser.newPage();
  
    // Navegar a la URL que contiene la tabla
    await page.goto('https://www.gasolinamx.com/estado/jalisco/zapopan'); // Reemplaza con la URL correcta
  
    // Extraer los datos de la tabla
    const datos = await page.evaluate(() => {
    
      const tabla = document.querySelector('.table.table-bordered.table-striped.table-small.tablaPrecios.pure-table.table-bordered.res-tbl');
  
     
      const filas = Array.from(tabla.querySelectorAll('tbody > tr'));
  
     
      return filas.map(fila => {
        const celdas = Array.from(fila.querySelectorAll('td'));
  
        return {
          gasolinera: celdas[0].innerText, // Gasolinera
          direccion: celdas[1].innerText, // Dirección
          magna: celdas[2].innerText, // Magna
          premium: celdas[3].innerText, // Premium
          diesel: celdas[4].innerText // Diésel
        };
      });
    });
    try{
        await GasolineraShema.insertMany(datos).then(()=>{
         // console.log('Datos insertados exitosamente');
        });
    }catch(e){
        console.log(e)
    }
    console.log(datos);
    await browser.close();
  };
  a();
module.exports=a; 
