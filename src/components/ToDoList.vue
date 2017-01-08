<template>
    <section class="main" v-show="todos.length">
      <input class="toggle-all" type="checkbox" v-model="allDone">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo == editedTodo}">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
        </li>
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
  data () {
    return {
      editedTodo: null
    }
  },
  computed: {
    filteredTodos: function () {
      return this.todos
    },
    remaining: function () {
      return this.todos.filter(function (todo) {
        return !todo.completed
      }).length
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
    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },
    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },
    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },
    removeCompleted: function () {
      this.todos = this.todos.filter(function (todo) {
        return !todo.completed
      })
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>
