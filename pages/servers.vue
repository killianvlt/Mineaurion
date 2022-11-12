<template>
  <main class="bg-servers-pattern h-full">
    <div class="container mx-auto grid grid-cols-3 grid-rows-4 gap-6">
      
      <div v-for="(server, index) in servers" v-bind:key="index" class="h-96 w-96 border-8 solid border-blue rounded-lg">
        <div class="h-14 flex items-center justify-center bg-dark-blue w-full">
          <h1 class="font-sans font-semibold text-xl uppercase text-gray-light">{{server.name}}</h1>
        </div>
        <div class="">Adresse : {{server.dns}}</div>
        <div class="">Version du serveur : {{server["version"].minecraft}}</div>
        <div class="">Version du modpack : {{server["version"].modpack}}</div>        
        <div class="">Joueurs(s) : {{server.onlinePlayers}} / {{server.maxPlayers}}</div>
        <div class="">Statut :</div>
        <div class="">Joueur(s) en ligne :
        </div>
        <div v-for="(player, index) in test" v-bind:key="index">
          {{player}}
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      servers: [],
      test: []
    }
  },
  async fetch() {
    this.servers = await fetch('https://api.mineaurion.com/query').then(res => res.json())
    test = await this.fillArray();
  },
  methods: {
    async fillArray() {
      this.servers.fetch("players")
      const test = servers.json();
      this.arr.push(test)
    },
  }
}
</script>