<template>
  <main class="bg-servers-pattern min-h-screen bg-cover  bg-fixed bg-center">
    <h1 class="flex justify-center text-7xl mt-4">NOS SERVEURS</h1>
    <div class="container mx-auto grid grid-cols-3 grid-rows-4 gap-6">
      
      <div v-for="(server, index) in servers" v-bind:key="index" class="h-96 w-96 border-8 solid border-blue rounded-lg">
        <div class="h-14 flex items-center justify-center bg-dark-blue w-full">
          <h1 class="font-sans font-semibold text-xl uppercase text-gray-light">{{server.name}}</h1>
        </div>
        <div class="ml-2 mt-2 text-gray-light">Adresse : {{server.dns}}</div>
        <div class="ml-2 text-gray-light">Version du serveur : {{server["version"].minecraft}}</div>
        <div class="ml-2 text-gray-light">Version du modpack : {{server["version"].modpack}}</div>        
        <div class="ml-2 text-gray-light">Joueurs(s) : {{server.onlinePlayers}} / {{server.maxPlayers}}</div>
        <div class="ml-2 text-gray-light">Statut :</div>
        <div class="ml-2 text-gray-light">Joueur(s) en ligne :</div>
        <div class="grid grid-flow-col mt-4 ml-2">
          <div v-for="(player, index) in server.players" v-bind:key="index">
            <img :src="getImgUrl(player)" :title="player">
          </div>
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
      playersList: []
    }
  },
  async fetch() {
    
    servers = await this.serversArray();
  },
  methods: {
    getImgUrl(player) {
      const url = "https://cravatar.eu/avatar/"+player+"/30"
      return url
    },
    async serversArray() {
      const url = "https://api.mineaurion.com/query"
      this.servers = await fetch(url).then(res => res.json())
    },
  }
}
</script>