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
      <div>
        <label for="game-time" class="time-label">Game Time</label>
        <input
          v-model="hours"
          type="number"
          @change="updateDate()"
          class="time"
        />
        :
        <input
          v-model="minutes"
          type="number"
          @change="updateDate()"
          class="time"
        />
        <select v-model="selectTimeType">
          <option v-for="timeType in timeTypes" :value="timeType">
            {{ timeType }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="court-name">Court Name</label>
        <input v-model="form.CourtName" id="court-name" type="text" />
      </div>
      <button type="submit" @click="submit()">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateGame",
  props: ["Session"],
  data() {
    return {
      form: {
        IdOne: null,
        IdTwo: null,
        GameTime: this.Session.sessionTime,
        CourtName: null,
        SessionId: this.Session.SessionId,
        GameType: "Doubles",
      },
      gameTimeHours: null,
      date: new Date(),
      hours: 0,
      minutes: 0,
      timeTypes: {
        am: "am",
        pm: "pm",
      },
      selectTimeType: "am",
    };
  },
  methods: {
    async createGame() {
      axios
        .post(process.env.VUE_APP_API_LINK + "/Game", {
          IdOne: this.form.IdOne,
          IdTwo: this.form.IdTwo,
          GameTime: this.form.GameTime,
          CourtName: this.form.CourtName,
          SessionId: this.form.SessionId,
          GameType: this.form.GameType,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateDate() {
      this.date = new Date(this.form.GameTime);
      if (this.hours > 12) {
        this.hours = 12;
      }
      if (this.selectTimeType == "pm") {
        if (this.hours != 12) {
          this.hours = this.hours + 12;
        }
      } else {
        if (this.hours == 12) this.hours = 0;
      }
      this.date.setHours(this.hours);
      console.log(this.hours);
      if (this.minutes >= 60) {
        this.minutes = 59;
      }
      this.date.setMinutes(this.minutes);
      this.form.GameTime = this.date;
      if (this.selectTimeType == "pm") {
        this.hours = this.hours - 12;
        if (this.hours == 0) {
          this.hours = 12;
        }
      } else {
        if (this.hours == 0) this.hours = 12;
      }
      console.log(this.hours);
    },
    clearGame() {
      this.form.IdOne = null;
      this.form.IdTwo = null;
      this.form.GameTime = this.Session.sessionTime;
      this.form.CourtName = null;
      this.form.SessionId = this.Session.SessionId;
      this.form.GameType = "Doubles";
    },
    submit() {
      this.updateDate();
      this.createGame();
      this.clearGame();
    },
  },
};
</script>

<style>
.time {
  width: 35px;
}
.time-label {
  margin-right: 5px;
}
select {
  margin: 5px;
}
</style>
