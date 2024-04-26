<template>
  
  <router-view/>
    <FooterDefint></FooterDefint>
</template>
<script>
import FooterDefint from '@/components/FooterDefint.vue';
export default {
    name: 'AppS',
    components:{
      FooterDefint
    }
  }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #16b882;
}
</style>
