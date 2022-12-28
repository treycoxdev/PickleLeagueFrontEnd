<template>
  <div>
    <h1>League Page</h1>
    <div v-if="!organizerSelected">
      <h2>Who are you</h2>
      <select v-model="selectedOrganizer">
        <option
          v-for="organizer in organizers"
          v-bind:value="organizer.leaugeRunnerId"
        >
          {{ organizer.firstName }} {{ organizer.lastName }}
        </option>
      </select>
      <button v-show="selectedOrganizer != null" @click="assignLeagueRunner">
        Select
      </button>
    </div>
    <div v-else>
      <button
        v-if="!leagueSelected && !createNewSelected"
        @click="DisplayCreateNewLeague"
      >
        Create a New Leauge
      </button>
      <div v-if="createNewSelected">
        <p @click="createNewSelected = false">Back</p>
        <CreateLeague v-bind:LeagueRunnerId="selectedOrganizer" />
      </div>
      <div v-if="!leagueSelected && !createNewSelected">
        <p>Select a Leauge</p>
        <select v-model="chosenLeague">
          <option v-for="league in leagues" v-bind:value="league">
            {{ league.leaugeName }}
          </option>
        </select>
        <button v-show="chosenLeague != null" @click="displayLeague">
          Select
        </button>
      </div>
      <div v-if="leagueSelected">
        <p @click="leagueSelected = false">Back</p>
        <ViewLeague v-bind:league="chosenLeague" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ViewLeague from "@/components/ViewLeague.vue";
import CreateLeague from "@/components/CreateLeague.vue";

export default {
  name: "LeagueView",
  components: {
    ViewLeague,
    CreateLeague,
  },
  data() {
    return {
      organizers: [],
      selectedOrganizer: null,
      organizerSelected: false,
      leagues: [],
      chosenLeague: null,
      leagueSelected: false,
      createNewSelected: false,
    };
  },
  methods: {
    async fetchLeagueRunners() {
      const leagueRunners = await axios.get(
        process.env.VUE_APP_API_LINK + "/LeaugeRunner/get"
      );
      this.organizers = leagueRunners.data;
    },
    async assignLeagueRunner() {
      localStorage.setItem("LeagueRunnerId", this.selectedOrganizer);
      this.fetchLeagues();
      this.organizerSelected = true;
    },
    async fetchLeagues() {
      const gatheredLeagues = await axios.get(
        process.env.VUE_APP_API_LINK +
          `Leauge/LeagueRunner/${localStorage.LeagueRunnerId}`
      );
      this.leagues = gatheredLeagues.data;
    },
    displayLeague() {
      this.leagueSelected = true;
    },
    DisplayCreateNewLeague() {
      this.createNewSelected = true;
    },
  },
  async mounted() {
    await this.fetchLeagueRunners();
    try {
      if (localStorage.LeagueRunnerId > 0) {
        this.organizerSelected = true;
        this.fetchLeagues();
      } else {
        this.organizerSelected = false;
      }
    } catch (ex) {}
  },
};
</script>
