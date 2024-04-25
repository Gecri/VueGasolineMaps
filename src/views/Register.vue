<template>
    <NavbarLogin></NavbarLogin>
    <div class="home">
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <!-- Icon -->
          <div class="fadeIn first">
            <img src="@/assets/logo.png" id="icon" alt="User Icon" />
          </div>
    
          <!-- Login Form -->
          <form @submit.prevent="submitForm">
            <input type="text" v-model="usuario" class="fadeIn second" name="login" placeholder="Username">
            <input type="password" v-model="password" class="fadeIn third" name="password" placeholder="Password">
            <input type="submit" class="fadeIn fourth" value="Sing In">
          </form>
    
      
         
    
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarLogin from '@/components/NavbarLogin.vue';
  
  
  
  
  
  export default {
    name: 'RegisterUser',
    components:{
      NavbarLogin
    },
    data() {
      return {
        usuario: "",
        password: "",
        error: false,
        mss_error: "",
      }
    },
    methods: {
      submitForm() {
        // Aquí puedes manejar la lógica para enviar el formulario
        console.log("Usuario:", this.usuario);
        console.log("Contraseña:", this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    background-color: #56baed;
  }
  
  .wrapper {
    max-width: 450px;
    width: 100%;
    text-align: center;
  }
  
  #formContent {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  }
  
  #formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    border-radius: 0 0 10px 10px;
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 15px 20px;
    margin: 10px 0;
    display: inline-block;
    border: 2px solid #f6f6f6;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    background-color: #56baed;
    color: white;
    border: none;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #39ace7;
  }
  
  .underlineHover:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #56baed;
    transition: width 0.2s;
  }
  
  .underlineHover:hover:after {
    width: 100%;
  }
  
  .fadeIn {
    animation: fadeIn ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 1s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  