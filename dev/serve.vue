<script lang="ts">
import { defineComponent } from 'vue';
import Vue3StarRatings from '@/vue3-star-ratings.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3StarRatings
  }
});
</script>

<template>
  <div id="app">
    <vue3-star-ratings />
  </div>
</template>
