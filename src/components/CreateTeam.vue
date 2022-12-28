<template>
  <h2>Create Team</h2>
  <form on-submit="createSession">
    <label>Team Name:</label>
    <input type="text" v-model="form.TeamName" />
    <label>League ID</label>
    <input type="text" v-model="form.LeagueId" />
  </form>
  <button @click="createTeam">Create</button>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        TeamName: null,
        LeagueId: null,
      },
    };
  },
  methods: {
    async createTeam() {
      console.log(this.form);
      axios
        .post(process.env.VUE_APP_API_LINK + "/Team", {
          teamName: this.form.TeamName,
          leaugeId: this.form.LeagueId,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
