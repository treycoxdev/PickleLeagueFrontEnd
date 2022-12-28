<template>
  <div>
    <h1>Player Page</h1>
  </div>
  <button
    @click="
      showForm = true;
      showJoinTeam = false;
    "
  >
    Create New Player
  </button>
  <CreatePlayer v-if="showForm && !showJoinTeam" />
  <button
    @click="
      showJoinTeam = true;
      showForm = false;
    "
  >
    Join Team
  </button>
  <JoinTeam v-if="showJoinTeam && !showForm" />
</template>

<script>
import CreatePlayer from "@/components/CreatePlayer.vue";
import JoinTeam from "@/components/JoinTeam.vue";

export default {
  components: {
    CreatePlayer,
    JoinTeam,
  },
  data() {
    return {
      showForm: false,
      PlayerName: "",
      showJoinTeam: false,
    };
  },
};
</script>
