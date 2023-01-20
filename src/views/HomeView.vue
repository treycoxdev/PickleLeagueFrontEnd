<template>
  <div class="home">
    <h1>Pickle League</h1>
    <p>Build your leagues more quickly</p>
    <router-link to="/league">Build a Leauge</router-link>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  async mounted() {
    localStorage.LeagueRunnerId = null;
  },
};
</script>
