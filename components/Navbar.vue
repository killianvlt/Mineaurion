<template>
  <section class="h-14 bg-dark-blue">
      <div class="container mx-auto flex justify-around align-middle py-4">
        <ul class="flex">
          <li class="text-gray-light font-sans">Joueurs connectés: {{infos.onlinePlayers}}</li>
          <li class="text-gray-light ml-6 font-sans">Joueurs uniques : 12 250</li>
        </ul>
        <div class="flex">
          <span class="text-gray-light font-sans">Rejoins nous:</span>
          <ul class="flex">
            <li class="ml-2 brightness-90 hover:brightness-100 hover:rotate-360 duration-500""><a href=""><img class="" src="~/assets/img/discord.svg" /></a></li>
            <li class="ml-2 brightness-70 hover:brightness-100 duration-500"><a href=""><img src="~/assets/img/ytb.svg" /></a></li>
          </ul>
        </div>
      </div>
  </section>
</template>


<script>
 export default {
    data() {
      return {
        infos: []
      }
    },
    watch: {
    '$route.query': '$fetch'
  },
    async fetch() {
      this.infos = await fetch(
        'https://api.mineaurion.com/query/online-players'
      ).then(res => res.json())
    }
  }
</script>