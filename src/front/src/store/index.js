import Vue from 'vue';
import Vuex from 'vuex';

import Knowledges from '../Model/Knowledges';
import getters from './getters';

const model = new Knowledges();

Vue.use(Vuex);

export default new Vuex.Store({
  debug: true,
  state: {
    knowledges: model.getList(),
  },
  getters,
  actions: {},
  mutations: {},
});
