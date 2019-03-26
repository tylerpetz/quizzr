<template>
  <div>
    {{ quizzes }}
    <b-field label="Name">
      <b-input v-model="quiz.name"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="quiz.description"></b-input>
    </b-field>
    <button @click="createQuiz" class="button is-primary">Create Quiz</button>
  </div>
</template>

<script>
class Quiz {
  constructor(name = "", description = "", questions = []) {
    this.name = name;
    this.description = description;
    this.questions = questions;
  }
}

export default {
  name: "NewQuiz",
  data() {
    return {
      quizzes: [],
      quiz: new Quiz()
    };
  },
  methods: {
    createQuiz() {
      this.quizzes.push(this.quiz);
      this.quiz = new Quiz();
    }
  }
};
</script>
