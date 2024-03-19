import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGoogleMaps from "@fawmi/vue-google-maps";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
const app = createApp(App);


const googleMapsKey = "AIzaSyBXahd5eQMawYSmn3g7GbpkXW0yijl8-jg";

app.use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: googleMapsKey,
     
    }
  })
  .mount('#app');

