<template>
  <h2>Create Player</h2>
  <form>
    <div class="form-group">
      <label>First Name:</label>
      <input type="text" v-model="form.FirstName" />
    </div>
    <div class="form-group">
      <label>Last Name:</label>
      <input type="text" v-model="form.LastName" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" v-model="form.LeagueId" />
    </div>
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
