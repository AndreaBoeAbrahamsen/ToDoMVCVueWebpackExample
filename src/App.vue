<template>
  <div id="app">
    <img src="./assets/logo.png">
    <to-do></to-do>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by Andrea B.A.</p>
      <p>Not part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import ToDo from './components/ToDo'

export default {
  name: 'app',
  components: {
    ToDo
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
  margin-top: 60px;
}
</style>
