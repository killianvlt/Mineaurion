<template>
  <nav class="h-32 bg-marine-blue flex">
    <div class="container mx-auto flex justify-around align-middle">
      <ul class="flex flex-row gap-10 items-center">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">FORUM</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">WIKI</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSE</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">BOUTIQUE</a></li>
      </ul>
      <div class="flex flex-row items-center">
        <a href=""><img class="h-28 brightness-75 hover:brightness-100 duration-300" src="~/assets/img/logo.svg" alt=""></a>
      </div>
      <ul class="flex flex-row gap-10 items-center">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">NOS SERVEURS</a></li>
        <li><NuxtLink class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" to="/servers">STATUS</NuxtLink></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSES</a></li>
      </ul>
    </div>
  </nav>
</template>