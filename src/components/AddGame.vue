<template>
    <h2>Add Game</h2>
    <select id="game-types" v-model="game.gameType" @change="resetIds">
        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
        </option>
    </select>
    <form>
      <section v-if="game.gameType == 'Singles'">
        <div>
          <label for="id-one">Player One:</label>
          <input type="number" id="id-one" v-model.number="game.idOne" />
        </div>
        <div>
          <label for="id-two">Player Two:</label>
          <input type="number" id="id-two" v-model.number="game.idTwo" />
        </div>
      </section>
      <section v-if="game.gameType == 'Doubles'">
        <div>
          <label for="id-one">Team One:</label>
          <input type="number" id="id-one" v-model.number="game.idOne" />
        </div>
        <div>
          <label for="id-two">Team Two:</label>
          <input type="number" id="id-two" v-model.number="game.idTwo" />
        </div>
      </section>
      
      <div>
        <label for="score-one">Score One:</label>
        <input type="number" id="score-one" v-model.number="game.scoreOne" @change="winnerId"/>
      </div>
      <div>
        <label for="score-two">Score Two:</label>
        <input type="number" id="score-two" v-model.number="game.scoreTwo" @change="winnerId" />
      </div>
      <div>
        <label for="game-time">Game Time:</label>
        <input type="time" id="game-time" v-model="game.gameTime" />
      </div>
      <div>
        <label for="court-name">Court Name:</label>
        <input type="text" id="court-name" v-model="game.courtName" />
      </div>
        <button @click="createPlayer">Create</button>
      </form>
    {{ game }}
  </template>
  <script>
  import axios from "axios";
  
  export default {
    name: "AddGame",
    prop:['Teams','Session', 'Players'],
    data() {
      return {
        options:[
            {value:"Singles", text:"Singles"},
            {value:"Doubles", text:"Doubles"},
        ],
        gameType: "Doubles",
        singles: {
          First: "Player 1",
          Second: "Player 2",
          Players: null
        },
        doubles: {
          First: "Team 1",
          Second: "Team 2",
          Teams: null
        },
        game: {
          gameId: 0,
          idOne: 0,
          idTwo: 0,
          scoreOne: 0,
          scoreTwo: 0,
          gameTime: null,
          courtName: '',
          sessionId: 0,
          winnerId: 0,
          gameType: 'Singles'
        }
      };
    },
    methods: {
      async createPlayer() {
        axios
          .post(process.env.VUE_APP_API_LINK + "/Games", {
            firstName: this.form.FirstName,
            lastName: this.form.LastName,
            email: this.form.Email,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      resetIds() {
        this.game.idOne = 0;
        this.game.idTwo = 0;
      },
      winnerId() {
        if (this.game.scoreOne > this.game.scoreTwo) {
          this.game.winnerId = this.game.idOne;
        } else if (this.game.scoreTwo > this.game.scoreOne) {
          this.game.winnerId = this.game.idTwo;
        } 
      }
    },
    computed: {
      
    }
  };
  </script>