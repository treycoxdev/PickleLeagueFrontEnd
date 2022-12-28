<template>
  <h2>Join a Team</h2>
  <form>
    <label>Player Id:</label>
    <input type="text" v-model="form.PlayerId" />
    <label>Team Id:</label>
    <input type="text" v-model="form.TeamId" />
  </form>
  <button @click="joinTeam">Create</button>
</template>
<script>
import axios from "axios";

export default {
  name: "JoinTeam",
  data() {
    return {
      form: {
        TeamId: null,
        PlayerId: null,
      },
    };
  },
  methods: {
    async joinTeam() {
      axios
        .post(process.env.VUE_APP_API_LINK + "/Player/Team", {
          TeamId: this.form.TeamId,
          PlayerId: this.form.PlayerId,
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
