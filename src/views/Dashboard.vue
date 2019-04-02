<template>
  <div class="dashboard content">
    <h1>Your Quizzes</h1>

    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Questions</th>
          <th>Attempts</th>
          <th>Average Score</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Questions</th>
          <th>Attempts</th>
          <th>Average Score</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="quiz in quizzes" :key="quiz.id">
          <th>{{ quiz.name }}</th>
          <td>10</td>
          <td>0</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>

    <router-link to="/new" class="button is-primary is-medium">
      Add a new Quiz
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters('quiz', {
      quizzes: 'quizzes'
    })
  },
  methods: {
    ...mapActions('quiz', {
      fetch: 'fetchQuizzes'
    }),
  },
  mounted() {
    this.fetch();
  } 
};
</script>
