<template>
  <div>
    <h1>Team Page</h1>
  </div>
  <button @click="showForm = true">Create New Team</button>
  <CreateTeam v-if="showForm" />
</template>

<script>
import CreateTeam from "@/components/CreateTeam.vue";

export default {
  components: {
    CreateTeam,
  },
  data() {
    return {
      showForm: false,
      teamName: "",
    };
  },
};
</script>
