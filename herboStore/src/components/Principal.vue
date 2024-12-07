<script>
import FooterVue from './Footer.vue';
import MenuDashboardVue from './MenuDashboard.vue';

export default {
  name: "Principal",
  components:{
    FooterVue,
    MenuDashboardVue
  }
};

</script>

<template>
<div>
<MenuDashboardVue />
 <main>
  <div id="principal" class="bg-[url('https://mercatdesantacaterina.com/images/productos/herbolario/pharmacy-2055130_1280.jpg')] flex justify-around items-center w-full h-full  bg-cover bg-center overflow-hidden">
<div class="bg-black h-[50vh] w-[70vh] border-2">
    <video id="video" class="h-full" controls loop autoplay>
         <source src="@/assets/videoplayback.mp4" type="video/mp4">
    </video>
</div>x


    <div id="carrusel" class="flex flex-col w-[70vh] h-[90vh] gap-4 mt-6">
<div id="imageUno" class="bg-gray-50/10 h-[28vh] w-[70vh] flex gap-3 p-3 hover:translate-x-6 transition-all duration-300">
    <img src="https://i.etsystatic.com/27562580/r/il/73a5a2/3786588975/il_570xN.3786588975_2cq1.jpg" alt="" class="rounded-full h-36 w-36 border-4 border-white">
    <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus exercitationem eos, repellendus tempora reiciendis ratione perferendis ad rem asperiores doloremque. Eveniet ratione veniam esse voluptate, ullam nam? Beatae, voluptatum magnam!</p>
</div>

        <div id="imageUno" class="bg-gray-50/10 h-[28vh] w-[70vh] flex gap-3 p-3 hover:translate-x-6 transition-all duration-300 ">
             <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus exercitationem eos, repellendus tempora reiciendis ratione perferendis ad rem asperiores doloremque. Eveniet ratione veniam esse voluptate, ullam nam? Beatae, voluptatum magnam!</p>
             <img src="https://i.etsystatic.com/41601641/r/il/76e709/5823858980/il_570xN.5823858980_ajie.jpg" alt="" class="rounded-full h-36 w-36 border-4 border-white" >
        </div>
         <div id="imageTres" class="bg-gray-50/10 h-[28vh] w-[70vh] flex gap-3 p-3 hover:translate-x-6 transition-all duration-300">
        <img src="https://ienutricion.com/wp-content/uploads/Disen%CC%83o-sin-ti%CC%81tulo-2021-11-22T145648.147.jpg" alt="" class="rounded-full h-36 w-36 border-4 border-white" >
        <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus exercitationem eos, repellendus tempora reiciendis ratione perferendis ad rem asperiores doloremque. Eveniet ratione veniam esse voluptate, ullam nam? Beatae, voluptatum magnam!</p>
        </div>
    </div>

  </div>

 </main>
<FooterVue />
 </div>


  
</template>

<style scoped>
#principal {
  background-size: cover;
  background-position: center;
}
</style>
