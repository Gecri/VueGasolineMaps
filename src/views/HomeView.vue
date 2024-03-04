<template>
  <div class="home">
    <div class="row">
      <div class="col-6">
        <img alt="Vue logo" src="../assets/Logo.webp"  class="logo">
      </div>
      <div class="col-lg-6">
     <ApiMaps></ApiMaps>
      </div>
      
    </div>
  </div>
</template>

<script>
 import ApiMaps from '../components/ApiMaps.vue'
 export default{
  name: 'HomeView' ,
    components: {
      ApiMaps
    }
 }
  

</script>

<style scoped>
.logo{
  width: 200px; /* ajusta el tamaño del cuadro según lo desees */
  height: 200px; /* ajusta el tamaño del cuadro según lo desees */
  border: 1px solid black; /* agrega un borde alrededor del cuadro */
}
</style>
