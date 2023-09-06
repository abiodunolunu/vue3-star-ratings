<script setup lang="ts">
import { ref } from "vue";
import AwardFilled from './icon/AwardFilled.vue';
import Vue3StarRatings from "./lib/components/Vue3StarRatings.vue";

const rate = ref(2.5456789678248984728);
</script>

<template>
  <div style="
      text-align: center;
      display: grid;
      place-content: center;
      height: 100vh;
    ">
    <Vue3StarRatings v-model="rate" :number-of-stars="5" :star-size="24" :custom-Svg="AwardFilled" />
  </div>
</template>

<style></style>
