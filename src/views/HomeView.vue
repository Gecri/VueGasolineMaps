<template>
  <Navbar></Navbar>
  <div class="home">
      <div class="row">
        <div class="logo col-2">
          <img alt="Vue logo" src="../assets/Logo.webp"  class="logo">
        </div>
        <div class="col-10">
          <h5 class="title"></h5>
        </div>
      </div>
    <div class="row">
      <div class="col-12 presentacion">
        <h2>s</h2>
      </div>
    <div class="row">
      <div class="app">
        
        <PruebaComponente></PruebaComponente>
        <ApiMaps></ApiMaps> 
      </div>
    </div>
       

    </div>
  </div>
</template>

<script>
 import PruebaComponente from '@/components/Prueba.vue';
 import ApiMaps from '@/components/ApiMaps.vue';
 import Navbar from '@/components/HelloWorld.vue';

 export default{
  
  name: 'HomeView' ,
    components: {
      Navbar,
      PruebaComponente,
      ApiMaps
    }
 }
  

</script>

<style scoped>
.logo{
  width: 200px; /* ajusta el tamaño del cuadro según lo desees */
  height: 200px; /* ajusta el tamaño del cuadro según lo desees */
  
}
.title {
  text-align: left; /* Alinea el texto a la izquierda */
  margin-top: 10px;
}
.presentacion{
  background-color: #16b882;
  width: 70%; 
  margin-left: auto; 
  margin-right: auto; 
  padding: 100px; 

}
</style>
