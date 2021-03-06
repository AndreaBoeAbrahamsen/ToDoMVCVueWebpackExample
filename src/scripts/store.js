import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    filter: 'all'
  },
  mutations: {
    updateFilter: (state, filter) => { state.filter = filter }
  }
});
