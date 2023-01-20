<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/club">Club</router-link> |
    <router-link to="/league">Leagues</router-link> |
    <router-link to="/team">Teams</router-link> |
    <router-link to="/player">Players</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #21943a;
  color: white;
  border: none;
  border-radius: 5px;
}

form {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  place-items: center;
}
.form-group {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  place-items: center;
}

@media (min-width: 600px) {
  .form-group-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
