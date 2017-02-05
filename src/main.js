// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CreateRoutes from './scripts/routes'

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  data: {
    filter: 'all'
  },
  template: '<App :filter="filter"/>',
  components: { App }
})

CreateRoutes(vm)
