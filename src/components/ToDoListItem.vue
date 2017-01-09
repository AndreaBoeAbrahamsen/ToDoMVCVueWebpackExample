<template>
  <li class="todo" :class="{completed: todo.completed, editing: editedTodo}">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo()">{{todo.title}}</label>
      <button class="destroy" @click="removeTodo()"></button>
    </div>
    <input class="edit" type="text" v-model="todo.title" v-todo-focus="editedTodo" @blur="doneEdit()" @keyup.enter="doneEdit()" @keyup.esc="cancelEdit()">
  </li>
</template>

<style>

</style>

<script>
export default{
  props: {
    todo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      editedTodo: false
    }
  },
  methods: {
    removeTodo: function () {
      this.$emit('remove-todo', this.todo)
    },
    editTodo: function () {
      this.beforeEditCache = this.todo.title
      this.editedTodo = true
    },
    doneEdit: function () {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = false
      this.todo.title = this.todo.title.trim()
      if (!this.todo.title) {
        this.removeTodo()
      }
    },
    cancelEdit: function () {
      this.editedTodo = false
      this.todo.title = this.beforeEditCache
    },
    removeCompleted: function () {
      this.$emit('remove-completed')
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
