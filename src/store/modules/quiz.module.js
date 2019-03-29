import router from "@/router.js";

export default {
  namespaced: true,
  state: {
    quizzes: [],
    quiz: {}
  },
  getters: {
    quizzes(state) {
      return state.quizzes;
    }
  },
  actions: {
    createQuiz({ commit }, quiz) {
      commit("CREATE_QUIZ", quiz);
      router.push({
        name: "EditQuiz",
        params: {
          id: quiz.id
        }
      });
    }
  },
  mutations: {
    CREATE_QUIZ(state, quiz) {
      state.quizzes.push(quiz);
    }
  }
};
