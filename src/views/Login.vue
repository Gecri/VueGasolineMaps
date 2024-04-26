<template>
  <NavbarLogin></NavbarLogin>
  <div class="home">
    <div class="wrapper">
      <div id="formContent">
        <!-- Icon -->
        <div class="fadeIn first">
          <img src="@/assets/logo.png" id="icon" alt="User Icon" />
        </div>

        <!-- Login Form -->
        <form @submit.prevent="submitForm">
          <input type="text" v-model="usuario" class="fadeIn second" name="login" placeholder="Email">
          <input type="password" v-model="password" class="fadeIn third" name="password" placeholder="Password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Password -->
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLogin from '@/components/NavbarLogin.vue';

export default {
  name: 'LoginFirst',
  components: {
    NavbarLogin
  },
  data() {
    return {
      usuario: "",
      password: "",
      error: false,
      mss_error: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Usuario:", this.usuario);
      console.log("Contraseña:", this.password);
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
}

.wrapper {
  width: 100%;
  max-width: 450px;
  text-align: center;
}

#formContent {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
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
  border: 2px solid #f6f6f6;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="submit"] {
  background-color: #56baed;
  color: white;
  border: none;
  padding: 15px 80px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
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
