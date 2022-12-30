<template>
  <h2>Sessions</h2>
  <section v-for="session in sessions" >
    <section v-if="showGames == null || session.sessionTime == showGames">
    <h3>{{ session.sessionLocation }}</h3>
    <p>{{ session.sessionTime }}</p>
    <button @click="showGames = session.sessionTime">View games</button>
    <section v-if="session.sessionTime == showGames">
      <ViewGames v-bind:Session="session"/>
    </section>
  </section>
  </section>
</template>
<script>
import axios from "axios";
import ViewGames from "./ViewGames.vue";

export default {
  name: "ViewSessions",
  props: ["league", ],
  components: {
    ViewGames
  },
  data() {
    return {
      sessions: null,
      showCreateSession: false,
      showViewSessions: false,
      showGames: null
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
