import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Principal from '../components/Principal.vue'
import Register from '../components/Register.vue'
import Perfil from '../components/Perfil.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal  
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, // Se asocia el componente Login a la ruta /login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, // Se asocia el componente Login a la ruta /login
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil, // Se asocia el componente Login a la ruta /login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
