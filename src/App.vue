<script setup lang="ts">
import { ref } from "vue";
import Vue3StarRatings from "./lib/components/Vue3StarRatings.vue";

const rate = ref(2.5456789);
</script>

<template>
  <div
    style="
      text-align: center;
      display: grid;
      place-content: center;
      height: 100vh;
      font-size: 40px;
    "
  >
    <p>
      {{ rate }}
    </p>
    <Vue3StarRatings v-model="rate" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
