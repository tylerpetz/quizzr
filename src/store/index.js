import Vue from "vue";
import Vuex from "vuex";
import quiz from "./modules/quiz.module.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    quiz
  }
});
