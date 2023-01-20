<template>
  <h2>{{ league.leaugeName }}</h2>
  <button
    v-on:click="
      showViewTeam = false;
      showViewSession = true;
      showCreateSession = false;
    "
  >
    View Sessions
  </button>
  <button
    v-on:click="
      showViewTeam = false;
      showCreateSession = true;
      showViewSession = false;
    "
  >
    Add Sessions
  </button>
  <button
    v-on:click="
      showViewTeam = true;
      showCreateSession = false;
      showViewSession = false;
    "
  >
    View Teams
  </button>
  <section v-if="showViewSession">
    <ViewSession v-bind:league="league" />
  </section>
  <section v-if="showCreateSession">
    <CreateSession v-bind:league="league" />
  </section>
  <section v-if="showViewTeam">
    <ViewTeam v-bind:league="league" />
  </section>
</template>
<script>
import ViewSession from "@/components/ViewSession.vue";
import CreateSession from "@/components/CreateSession.vue";
import ViewTeam from "@/components/ViewTeams.vue";

export default {
  name: "ViewLeague",
  components: {
    ViewSession,
    CreateSession,
    ViewTeam,
  },
  props: ["league"],
  data() {
    return {
      sessions: null,
      showCreateSession: false,
      showViewSession: false,
      showViewTeam: false,
    };
  },
  methods: {},
  async mounted() {},
};
</script>
