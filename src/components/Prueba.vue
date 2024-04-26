<template>
    <div>
      <h1>{{ mensaje }}</h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mensaje: ''
      };
    },
    mounted() {
      axios.get('http://localhost:3000/api/mensaje')
        .then((response) => {
          this.mensaje = response.data.mensaje;
        })
        .catch((error) => {
          console.error('Error al obtener datos:', error);
        });
    }
  };
  </script>
  