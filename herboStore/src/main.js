import { createApp } from 'vue';
import App from './App.vue';
import router from './router/rutas'; // Asegúrate de que el router esté correctamente importado

createApp(App)
  .use(router) // Usa Vue Router
  .mount('#app');
