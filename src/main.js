// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CreateRoutes from './scripts/routes'

import { store } from './scripts/store'

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  components: { App }
})

CreateRoutes(vm)
