<template>
    <h1>
        Games
    </h1>
    <button @click="showAddGame = true">Add Game</button>
    <AddGame v-if="showAddGame" :Teams="Teams" :Players="Players" :Session="Session"/>
    <p>
        {{ games }}
    </p>
</template>
<script>
import axios from 'axios';
import AddGame from './AddGame.vue';

export default{
   name: 'ViewGames' ,
   props: ['Session'],
   components: {
    AddGame
   },
   data(){
    return{
        games : null,
        teams: null,
        players: null,
        showAddGame: false
    }
   },
   methods: {
    async getGames() {
      const games = await axios.get(
        process.env.VUE_APP_API_LINK + `/game/Session/${this.Session.sessionId}`
      );
      this.games = games.data;
    },
    async getTeams() {
      const Teams = await axios.get(
        process.env.VUE_APP_API_LINK + `/Team/LeagueId/${this.Session.leaugeId}`
      );
      this.teams = Teams.data;
    },
    async getPlayers(){
        const Players = await axios.get(
        process.env.VUE_APP_API_LINK + `/Player/League/${this.Session.leaugeId}`
      );
      this.players = Players.data;
    }
  },
  async mounted() {
    await this.getGames();
    await this.getTeams();
    await this.getPlayers();
  },
}
</script>
