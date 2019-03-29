<template>
  <div>
    <h1>editing quiz {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "EditQuiz",
  props: {
    id: {
      type: Number,
      required: true,
      description: "ID of the quiz to edit."
    }
  }
};
</script>
