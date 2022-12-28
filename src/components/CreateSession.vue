<template>
  <h2>Create Session</h2>
  <form on-submit="createSession">
    <label>Session Location:</label>
    <input type="text" v-model="form.SessionLocation" />
    <label>Session Date</label>
    <input type="date" v-model="form.SessionDate" />
  </form>
  <button @click="createSession">Create</button>
</template>
<script>
import axios from "axios";

export default {
  name: "CreateSession",
  props: ["league"],
  data() {
    return {
      sessions: null,
      form: {
        SessionLocation: "",
        SessionDate: null,
      },
    };
  },
  methods: {
    async createSession() {
      console.log(this.form);
      axios
        .post(process.env.VUE_APP_API_LINK + "/Session", {
          sessionLocation: this.form.SessionLocation,
          sessionTime: this.form.SessionDate,
          leaugeId: this.league.leaugeId,
        })
        .then(function (response) {
          console.log(response);
          (this.form.SessionLocation = null), (this.form.SessionDate = null);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  async mounted() {},
};
</script>
