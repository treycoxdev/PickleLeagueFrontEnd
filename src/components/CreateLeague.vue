<template>
  <h2>Create a new League</h2>
  <form on-submit="createLeague">
    <label>League Name:</label>
    <input type="text" v-model="form.LeagueName" />
    <label>Start Date</label>
    <input type="date" v-model="form.StartDate" />
    <select v-model="form.LeagueType">
      <option v-for="leagueType in LeagueType" :value="leagueType.value">
        {{ leagueType.type }}
      </option>
    </select>
  </form>
  <button @click="createLeague">Create</button>
</template>
<script>
import { stringLiteral } from "@babel/types";
import axios from "axios";

export default {
  name: "CreateLeague",
  props: {
    LeagueRunnerId: 1,
  },
  data() {
    return {
      form: {
        LeagueName: "",
        StartDate: null,
        LeagueType: null,
      },
      LeagueType: [
        {
          type: "Singles",
          value: 1,
        },
        {
          type: "Doubles",
          value: 2,
        },
      ],
    };
  },
  methods: {
    async createLeague() {
      console.log("Selected");
      axios
        .post(process.env.VUE_APP_API_LINK + "/Leauge/LeaugeWithRunnerId", {
          leaugeName: this.form.LeagueName,
          leaugeStartDate: this.form.StartDate,
          leagueType: this.form.LeagueType,
          leaugeRunnerId: this.LeagueRunnerId,
        })
        .then(function (response) {
          console.log(response);
          (this.form.LeagueName = null), (this.form.StartDate = null);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
