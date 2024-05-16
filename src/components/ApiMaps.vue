<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map';

axios.defaults.baseURL = 'http://localhost:3000'; 

const apiKey = "AIzaSyAU5X4IVScQeISwKYLNJBaxlCUF3JZs40o";

const center = ref({ lat: 20.7305861, lng: -103.3903628 });
const markers = ref([]);


async function geocode(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      throw new Error('No se encontraron resultados para la dirección proporcionada.');
    }
  } catch (error) {
    throw new Error('Hubo un error al obtener las coordenadas para la dirección proporcionada.');
  }
}

async function obtenerCoordenadasGasolineras() {
  try {
    const dataGasolina = await axios.get('/dataGasolinera');
    const gasolineras = dataGasolina.data;
    
    for (let i = 0; i < gasolineras.length; i++) {
      try {
        const coordenadas = await geocode(gasolineras[i].direccion + gasolineras[i].gasolinera);
        markers.value.push({ position: coordenadas, name: gasolineras[i].gasolinera,direccion: gasolineras[i].direccion,regularGasolina: gasolineras[i].regular});
        console.log(await geocode(gasolineras[i].direccion + gasolineras[i].gasolinera) + gasolineras[i].gasolinera);
      } catch (error) {
        console.error('Hubo un error al obtener las coordenadas de la gasolinera', gasolineras[i].gasolinera + ':', error.message);
      }
    }

  } catch (error) {
    console.error('Hubo un error al obtener los datos de las gasolineras:', error.message);
  }
}


obtenerCoordenadasGasolineras();

</script>

<template>
  <GoogleMap
    api-key="AIzaSyAU5X4IVScQeISwKYLNJBaxlCUF3JZs40o"
    style="width: 100%; height: 400px"
    :center="center"
    :zoom="13"
  >
    <Marker 
      v-for="(marker, index) in markers" 
      :key="index" 
      :options="{ position: marker.position }" >
      <InfoWindow>
        <h3>{{marker. name}} {{marker.direccion }}</h3>
        <h4>Regular: {{ marker.regularGasolina}} </h4>
      </InfoWindow>
    </Marker>
   


  
    
 

  </GoogleMap>
</template>


<style>
</style>