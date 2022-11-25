<template>
  <nav class="h-32 bg-marine-blue flex">
    <div class="container mx-auto flex flex-row justify-around items-center">
      <!-- Left menu desktop version -->
      <ul class="gap-10 items-center hidden lg:flex lg:flex-row">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">FORUM</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">WIKI</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSE</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">BOUTIQUE</a></li>
      </ul>
      <!-- Logo -->
      
      <div class="flex flex-row items-center mx-auto relative">
        <a href="/"><img class="h-28 brightness-75 hover:brightness-100 duration-300 md:block" src="~/assets/img/logo.svg" alt=""></a>
        <!--  Hamburger  -->
        <button class="lg:hidden absolute -right-full">
          <div class="space-y-2">
            <div class="w-8 h-1 rounded-sm bg-gray-light"></div>
            <div class="w-8 h-1 rounded-sm bg-gray-light"></div>
            <div class="w-8 h-1 rounded-sm bg-gray-light"></div>
          </div>
        </button>
      </div>
      <!-- Right menu desktop version -->
      <ul class="gap-10 items-center hidden lg:flex lg:flex-row">
        <li><a @click.prevent="scrollToServers" class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300 hover:cursor-pointer">NOS SERVEURS</a></li>
        <li><NuxtLink class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" to="/servers">STATUS</NuxtLink></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSES</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {

}
</script>