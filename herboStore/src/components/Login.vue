<template>
  <div class="flex flex-col min-h-screen">
    <MenuDashboardVue />

    <div class="flex flex-grow items-center justify-center bg-[url('https://mercatdesantacaterina.com/images/productos/herbolario/pharmacy-2055130_1280.jpg')] bg-cover bg-center overflow-hidden">
      <div class="form border-4 h-[60vh] w-[50vh] bg-white/50 flex flex-col items-center gap-7 ">
        <input v-model="name" type="text" name="" id="" placeholder="Usuario" class="mt-10">
        <input v-model="password" type="password" name="" id="" placeholder="Contraseña">
        <button @click="login" class="bg-emerald-700 w-36 h-7 text-white hover:bg-emerald-950"> Entrar</button>
         <button class="bg-emerald-700 w-36 h-7 text-white hover:bg-emerald-950"><router-link to="/register"> Registrarme</router-link></button>
        
      </div>
    </div>

    <FooterVue />
  </div>
</template>

<script>

import FooterVue from './Footer.vue'
import MenuDashboardVue from './MenuDashboard.vue'
import PerfilVue from './Perfil.vue'


export default {
  name: "Register",
  components: { MenuDashboardVue, FooterVue, PerfilVue},
  data() {
    return {
      name: '',
      password: '',
      name_local : '',
      password_local: ''
    }
  },
  methods: {
   login() {
  let usuarioEncontrado = false;
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (value && value.trim().startsWith('{') && value.trim().endsWith('}')) {
      const parsedValue = JSON.parse(value); 

    
      if (parsedValue.name === this.name && parsedValue.password === this.password) {
        console.log("Usuario está registrado");
        this.$router.push("/Perfil");
        usuarioEncontrado = true;
        break;
      }
    }
  }


  if (!usuarioEncontrado) {
    alert("Usuario o contraseña incorrectos");
  }
}


  }
}
</script>

<style scoped>

</style>
