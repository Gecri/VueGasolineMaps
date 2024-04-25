<template>
  <ul class="nav justify-content-end bg-body-tertiary ">
  <li class="nav-item">
    <router-link  to="/login" class="nav-link" aria-current="page">Login</router-link>
  </li>
  <li class="nav-item">
    <router-link  to="/register" class="nav-link" aria-current="page">Sing In</router-link>
  </li>
</ul>
</template>

  <script>
  export default{
        name: 'NavbarLogin'
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
  