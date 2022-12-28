<template>
  <h2>Create Player</h2>
  <form>
    <label>First Name:</label>
    <input type="text" v-model="form.FirstName" />
    <label>Last Name:</label>
    <input type="text" v-model="form.LastName" />
    <label>Email</label>
    <input type="text" v-model="form.LeagueId" />
  </form>
  <button @click="createPlayer">Create</button>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        FirstName: null,
        LastName: null,
        Email: null,
      },
    };
  },
  methods: {
    async createPlayer() {
      axios
        .post(process.env.VUE_APP_API_LINK + "/Player", {
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
  },
};
</script>
