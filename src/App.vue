<script setup lang="ts">
import { ref } from "vue";
import Vue3StarRatings from "./components/Vue3StarRatings.vue";

const rate = ref(4.76);
</script>

<template>
  {{ rate }}
  <Vue3StarRatings
    v-model="rate"
    star-color="#2e20ff"
    :inactive-color="'#ccddaa'"
    star-size="80"
    :control-size="50"
    control-color="#ff00aa"
    :number-of-stars="8"
    :show-control="!false"
    :disable-click="!true"
    :control-bg="'#bada55'"
    :step="2"
  />
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
