<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-green-900 text-white">

    <div class="max-w-4xl w-full p-8 bg-white/30 rounded-lg shadow-lg backdrop-blur-xl">

      <h1 class="text-4xl font-semibold text-center mb-6">¡Felicidades!</h1>
      

      <p class="text-lg text-center mb-8">
        Has iniciado sesión correctamente. Bienvenido a tu perfil.
      </p>


      <div class="bg-white/50 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-2xl font-medium mb-2">Tu Perfil</h2>
        <p class="text-sm text-gray-200 mb-4">Aquí puedes administrar tu información personal y configuraciones.</p>


        <div class="flex justify-center gap-4">
          <button class="bg-lime-500 text-black py-2 px-6 rounded-lg hover:bg-lime-600 transition-all">Editar Perfil</button>
          <button class="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerfilVue'
}
</script>

<style scoped>

</style>
