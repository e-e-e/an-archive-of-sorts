import Vue from 'vue';
import Vuex from 'vuex';

import { INITIAL_STATE } from 'constants/defaults';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: INITIAL_STATE,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
