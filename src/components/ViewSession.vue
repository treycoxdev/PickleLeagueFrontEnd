<template>
  <h2>Sessions</h2>
  <p on-click="back()">Back</p>
  <h2>Add Game</h2>
  <div class="sessions" v-if="!showToAdd">
    <div class="group" v-for="session in sessions" :key="session.sessionId">
      {{ getDate(session.sessionTime) }}
      <button @click="setSessionId(session)">Add Games</button>
    </div>
  </div>
  <CreateGame v-if="showToAdd" :Session="sessionToAddTo" />
</template>
<script>
import axios from "axios";
import CreateGame from "@/components/CreateGame.vue";

export default {
  name: "ViewSessions",
  props: ["league"],
  components: {
    CreateGame,
  },
  data() {
    return {
      sessions: null,
      showCreateSession: false,
      showViewSessions: false,
      sessionToAddTo: null,
      showToAdd: false,
    };
  },
  methods: {
    async getSessions() {
      const Sessions = await axios.get(
        process.env.VUE_APP_API_LINK + `/Leauge/Session/${this.league.leaugeId}`
      );
      this.sessions = Sessions.data;
    },
    getDate(dateGiven) {
      let date = new Date(dateGiven);
      let formattedDate = date.toLocaleString("en-us", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return formattedDate;
    },
    setSessionId(session) {
      this.sessionToAddTo = session;
      this.showToAdd = true;
    },
    back() {
      this.showToAdd = false;
    },
  },
  async mounted() {
    await this.getSessions();
  },
};
</script>
