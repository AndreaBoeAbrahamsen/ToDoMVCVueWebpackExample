<template>
    <section class="main" v-show="todos.length">
      <input class="toggle-all" type="checkbox" v-model="allDone">
      <ul class="todo-list">
        <to-do-list-item v-for="todo in filteredTodos" v-bind:todo="todo" v-on:remove-todo="removeTodo" v-on:remove-completed="removeCompleted"></to-do-list-item>
      </ul>
    </section>
</template>

<style>
  .todo-list li label {
    text-align: left;
  }

  .todo-list li .toggle {
    left: 0;
  }
</style>

<script>
import ToDoListItem from './ToDoListItem'
import Filters from 'exports-loader?filters!../scripts/filters'

export default{
  props: {
    todos: {
      type: Array,
      default: function () {
        return []
      }
    },
    visibility: {
      type: String,
      default: 'All'
    }
  },
  computed: {
    filteredTodos: function () {
      return Filters[this.visibility](this.todos)
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },
  methods: {
    removeTodo: function (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    removeCompleted: function () {
      this.$emit('remove-completed')
    }
  },
  components: {
    ToDoListItem
  }
}
</script>
