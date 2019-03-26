<template>
  <div id="app">
    <Hero />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero
  }
};
</script>
