<template>
  <div>
    <form>
      <div class="form-group">
        <label for="id-one">First ID</label>
        <input v-model="form.IdOne" id="id-one" type="text" />
      </div>
      <div class="form-group">
        <label for="id-two">Second ID</label>
        <input v-model="form.IdTwo" id="id-two" type="text" />
      </div>
      <div class="form-group">
        <label for="game-time">Game Time</label>
        <input v-model="form.GameTime" id="game-time" type="text" />
      </div>
      <div class="form-group">
        <label for="court-name">Court Name</label>
        <input v-model="form.CourtName" id="court-name" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateGame",
  props: ["SessionId"],
  data() {
    return {
      form: {
        IdOne: null,
        IdTwo: null,
        GameTime: null,
        CourtName: null,
        SessionId: null,
        WinnerId: null,
        GameType: null,
      },
    };
  },
  methods: {
    async createGame() {
      axios
        .post(process.env.VUE_APP_API_LINK + "/Player", {
          firstName: this.form.FirstName,
          lastName: this.form.LastName,
          email: this.form.Email,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
