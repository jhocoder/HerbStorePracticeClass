<script>
export default {
  name: "MenuDashboard",
  data() {
    return {
      home: "Home",
      about: "About",
      conversions: "Conversions",
      login: "Login",
    };
  },
};
</script>

<template>
  <header>
    <ul class="bg-gradient-to-r from-black to-green-900 h-20 flex items-center justify-around text-white text-2xl">
      <li class="hover:text-lime-200"><router-link to="/">{{ home }}</router-link></li>
      <li class="hover:text-lime-200">{{ conversions }}</li>
      <li class="hover:text-lime-200">{{ about }}</li>
      <li class="hover:text-lime-200"><router-link to="/login">{{ login }}</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
/* Si necesitas agregar más estilos, puedes hacerlo aquí */
</style>
