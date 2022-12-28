<template>
  <h2>Teams</h2>
  <section v-for="Team in Teams">
    <h3>{{ Team.teamName }}</h3>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "ViewTeams",
  props: ["league"],
  data() {
    return {
      Teams: null,
    };
  },
  methods: {
    async getTeams() {
      const Teams = await axios.get(
        process.env.VUE_APP_API_LINK + `/Team/LeagueId/${this.league.leaugeId}`
      );
      this.Teams = Teams.data;
    },
  },
  async mounted() {
    await this.getTeams();
  },
};
</script>
