<template>
  <div class="flex flex-col min-h-screen">
    <MenuDashboardVue />
    <div class="flex flex-grow items-center justify-center bg-[url('https://mercatdesantacaterina.com/images/productos/herbolario/pharmacy-2055130_1280.jpg')] bg-cover bg-center overflow-hidden">
      <div class="form border-4 h-[60vh] w-[50vh] bg-white/50 flex flex-col items-center gap-7 ">
        <input v-model="name" type="text" name="" id="name" placeholder="Usuario" class="mt-10">
        <input v-model="password" type="password" name="" id="password" placeholder="Contraseña">
        <input v-model="email" type="email" name="email" id="email" placeholder="Email">
        <button @click="register" class="bg-emerald-700 w-36 h-7 text-white hover:bg-emerald-950">Registrarme</button>
      </div>
    </div>

    <FooterVue />
  </div>
</template>

<script>
import FooterVue from "./Footer.vue"
import MenuDashboardVue from './MenuDashboard.vue'

export default {
    name:"Register",
    components: { MenuDashboardVue, FooterVue },
    data (){
        return{
         name: '',
          password: '',
          email :'',
          contador : 0
        }
    },
    methods:{
        register(){
          this.contador++
          const userRegister = {
            name : this.name,
            password: this.password,
            email: this.email
          }
          localStorage.setItem(this.contador.toString(), JSON.stringify(userRegister))

          this.name = ''
          this.password = ''
          this.email = ''

        }
    }
}
</script>