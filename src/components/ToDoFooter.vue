<template>
  <footer class="footer">
				<span class="todo-count">
					<strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
				</span>
    <ul class="filters">
      <li><a href="#/all" :class="{selected: filter == 'all'}">All</a></li>
      <li><a href="#/active" :class="{selected: filter == 'active'}">Active</a></li>
      <li><a href="#/completed" :class="{selected: filter == 'completed'}">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
      Clear completed
    </button>
  </footer>
</template>

<style>

</style>

<script>
import Filters from 'exports-loader?filters!../scripts/filters'

export default{
  props: {
    todos: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    filter: function () {
      return this.$store.state.filter
    },
    remaining: function () {
      return Filters.active(this.todos).length
    }
  },
  methods: {
    pluralize: function (word, count) {
      return word + (count === 1 ? '' : 's')
    },
    removeCompleted: function () {
      this.$emit('remove-completed')
    }
  }
}
</script>
