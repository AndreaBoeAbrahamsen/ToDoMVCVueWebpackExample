<template>
  <section class="todoapp" v-cloak>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <to-do-list v-bind:todos="todos" v-bind:visibility="visibility"></to-do-list>
  </section>
</template>

<script>
import ToDoList from './ToDoList'

export default {
  name: 'toDo',
  data () {
    return {
      todos: [],
      newTodo: '',
      visibility: 'all'
    }
  },
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({ title: value, completed: false })
      this.newTodo = ''
    }
  },
  components: {
    ToDoList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../node_modules/todomvc-app-css/index.css';
  @import '../../node_modules/todomvc-common/base.css';

  [v-cloak] { display: none; }
</style>
