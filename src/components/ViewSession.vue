<template>
  <h2>Sessions</h2>
  <section v-for="session in sessions">
    <h3>{{ session.sessionLocation }}</h3>
    <p>{{ session.sessionTime }}</p>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "ViewSessions",
  props: ["league"],
  data() {
    return {
      sessions: null,
      showCreateSession: false,
      showViewSessions: false,
    };
  },
  methods: {
    async getSessions() {
      const Sessions = await axios.get(
        process.env.VUE_APP_API_LINK + `/Leauge/Session/${this.league.leaugeId}`
      );
      this.sessions = Sessions.data;
    },
  },
  async mounted() {
    await this.getSessions();
  },
};
</script>
