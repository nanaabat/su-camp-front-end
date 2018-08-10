import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    houses: [],
    currentHouse: {}
  },
  mutations: {
    setHouses(state, data) {
      state.houses = data;
    },
    setCurrentHouse(state, data) {
      state.currentHouse = data;
    }
  }
});
