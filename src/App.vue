<template>
<div>
    <header-list />
    <router-view></router-view>
</div>
</template>

<script>

import HeaderList from './components/HeaderList.vue'
export default {
  name: 'App',
  components: {
    HeaderList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}
</style>
