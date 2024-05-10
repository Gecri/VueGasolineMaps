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
            <input type="text" v-model="email" class="fadeIn second" name="login" placeholder="Email" />
            <input type="password" v-model="password" class="fadeIn third" name="password" placeholder="Password" />
            <input type="submit" class="fadeIn fourth" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarLogin from '@/components/NavbarLogin.vue';
  import axios from 'axios';
  axios.defaults.baseURL = 'http://localhost:3000'; 
  export default {
    name: 'RegisterUser',
    components: {
      NavbarLogin,
    },
    data() {
      return {
        usuario: '',
        password: '',
        error: false,
        mss_error: '',
      };
    },
    methods: {
  async submitForm() {
    try {
      // Realiza la solicitud POST
      const response = await axios.post('/register', {
        email: this.email,
        password: this.password,
      });

     
      console.log('Registro exitoso:', response.data);
      
    } catch (error) {
      // Maneja el error si la solicitud falla
      console.error('Error al registrar:', error.response?.data || error.message);
    }
  },
},
  }
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Poppins", sans-serif;
  }
  
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Centrar verticalmente */
    background-color: #ffffff;
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
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  }
  
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 15px 20px;
    margin: 10px 0;
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
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  input[type="submit"]:hover {
    background-color: #39ace7;
  }
  
  .fadeIn {
    animation: fadeIn 1s ease-in forwards;
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
  