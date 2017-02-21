<template>
  <section class="todoapp" v-cloak>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
    </header>
    <to-do-list v-bind:todos="todos"></to-do-list>
    <to-do-footer v-show="todos.length" v-bind:todos="todos"  v-on:remove-completed="removeCompleted"></to-do-footer>
  </section>
</template>

<script>
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'
import Filters from 'exports-loader?filters!../scripts/filters'
import ToDoStorage from '../scripts/todoStorage'

export default {
  name: 'toDo',
  data () {
    return {
      todos: ToDoStorage.fetch(),
      newTodo: ''
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: ToDoStorage.save
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
    },
    removeCompleted: function () {
      this.todos = Filters.active(this.todos)
    }
  },
  components: {
    ToDoList,
    ToDoFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../node_modules/todomvc-app-css/index.css';
  @import '../../node_modules/todomvc-common/base.css';

  [v-cloak] { display: none; }
</style>
