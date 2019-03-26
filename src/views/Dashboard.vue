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
        <tr>
          <th>Test 1</th>
          <td>10</td>
          <td>0</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>Test 2</th>
          <td>20</td>
          <td>1</td>
          <td>50%</td>
        </tr>
      </tbody>
    </table>

    <router-link to="/new" class="button is-primary is-medium">
      Add a new Quiz
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>
