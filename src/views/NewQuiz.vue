<template>
  <div>
    {{ quizzes }}
    <b-field label="Name">
      <b-input v-model="quiz.name"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="quiz.description"></b-input>
    </b-field>
    <button @click="createNewQuiz" class="button is-primary">
      Create Quiz
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewQuiz",
  data() {
    return {
      quiz: {
        name: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapGetters("quiz", {
      quizzes: "quizzes"
    })
  },
  methods: {
    ...mapActions("quiz", {
      createQuiz: "createQuiz"
    }),
    createNewQuiz() {
      // Commit to state
      this.createQuiz(this.quiz);

      // Reset quiz object
      //this.quiz = new Quiz();
    }
  }
};
</script>
