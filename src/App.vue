<template>
  <div id="app">
    <nav>
      <router-link to="/">DeFi Dashboard</router-link> |
      <router-link to="/nft-marketplace">NFT Marketplace Tracker</router-link> |
      <router-link to="/governance-dashboard">Governance Dashboard</router-link> |
      <router-link to="/blockchain-analytics">Blockchain Analytics</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
