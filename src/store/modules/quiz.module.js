import router from "@/router.js";
import QuizService from "@/services/quiz.service.js";

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
    fetchQuizzes({ commit }) {
      return QuizService.query()
        .then((res) => {
          console.log(res);
          commit("FETCH_QUIZZES", res.data);
        });
    },
    createQuiz({ commit }, quiz) {
      return QuizService.create(quiz)
        .then((res) => {
          // Save the new quiz to store
          commit("CREATE_QUIZ", quiz);

          // Push to the new quiz
          router.push({
            name: "EditQuiz",
            params: {
              id: quiz.id
            }
          });
        });
    }
  },
  mutations: {
    FETCH_QUIZZES(state, quizzes) {
      state.quizzes = quizzes;
    },
    CREATE_QUIZ(state, quiz) {
      state.quizzes.push(quiz);
    }
  }
};
