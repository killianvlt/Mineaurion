<template>
  <nav class="lg:h-32 bg-marine-blue flex">
    <div class="container mx-auto flex flex-col lg:flex-row justify-around items-center">
      
      <div class="flex flex-row relative mt-5 lg:mt-0">
        <div class="flex lg:hidden flex-row items-center mx-auto relative justify-center">
          <a href="/"><img class="h-24 brightness-75 hover:brightness-100 duration-300 flex justify-center" src="~/assets/img/logo.svg" alt=""></a>
        </div>
      </div>
      <!-- Left menu desktop version -->
      <ul class="lg:gap-10 mt-5 litems-center flex-col lg:mt-0 lg:flex lg:flex-row">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">FORUM</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">WIKI</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSE</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">BOUTIQUE</a></li>
      </ul>
      
      <!-- Logo Responsive -->   
      <div class="lg:flex flex-row items-center mx-auto relative justify-center hidden">
        <a href="/"><img class="h-28 brightness-75 hover:brightness-100 duration-300 flex justify-center" src="~/assets/img/logo.svg" alt=""></a>
      </div>
      <!-- Right menu desktop version -->
      <ul class="lg:gap-10 ml-3 flex flex-col lg:flex-row">
        <li><a  v-scroll-to="{ el: '#servers', duration: 300 }" @click="$router.push({ name: 'index', ref: 'servers-list' })" class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300 hover:cursor-pointer">NOS SERVEURS</a></li>
        <li><NuxtLink class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" to="/servers">STATUS</NuxtLink></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSES</a></li>
      </ul>
    </div>
  </nav>
  
</template>
<script>
export default {
  scrollToServers(){
    this.$refs["servers"].scrollIntoView({behavior: 'smooth'})
  }
}
</script>