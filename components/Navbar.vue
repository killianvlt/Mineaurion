<template>
  <nav class="h-32 bg-marine-blue flex">
    <div class="container mx-auto flex flex-row justify-around align-middle">
      <ul class="flex-row gap-10 items-center sm:hidden md:flex">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">FORUM</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">WIKI</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSE</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">BOUTIQUE</a></li>
      </ul>
      <div class="flex flex-row items-center justify-between">
        <a href="/"><img class="h-28 brightness-75 hover:brightness-100 duration-300 md:block" src="~/assets/img/logo.svg" alt=""></a>
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
            class="w-10 h-10 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <ul class="flex flex-row gap-10 items-center sm:hidden md:flex">
      <li><a @click.prevent="scrollToServers" class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300 hover:cursor-pointer">NOS SERVEURS</a></li>
      <li><NuxtLink class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" to="/servers">STATUS</NuxtLink></li>
      <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSES</a></li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  methods: {
    scrollToServers(){
      this.$refs["servers"].scrollIntoView({behavior: 'smooth'})
    }
  }
  
}
</script>