<template>
  <section class="h-14 bg-dark-blue">
    <div class="container md:mx-auto flex justify-between align-middle py-4">
      <ul class="flex">
        <li class="text-gray-light font-sans">Joueur(s) en ligne : {{infos.onlinePlayers}}</li>
        <li class="text-gray-light ml-6 font-sans">joueurs uniques : 12 250</li>
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
  async fetch() {
    const infos = await this.infosArray()
  },
  mounted() {
    this.intervalData = setInterval(this.infosArray, 12000)
  },
  destroyed() {
    clearInterval(this.intervalData)
  },
  methods: {
    async infosArray() {
      const url = "https://api.mineaurion.com/query/online-players"
      this.infos = await fetch(url).then(res => res.json())
    },
  }
}
</script>