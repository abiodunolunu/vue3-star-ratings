<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import AngleLeft from "./icons/AngleLeft.vue";
import AngleRight from "./icons/AngleRight.vue";
import StarIcon from "./icons/StarIcon.vue";

interface Props {
  modelValue?: number;
  starColor?: string;
  inactiveColor?: string;
  starSize?: string | number;
  controlBg?: string;
  controlColor?: string;
  controlSize?: string | number;
  numberOfStars?: number;
  showControl?: boolean;
  disableClick?: boolean;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  starColor: "#ff9800",
  inactiveColor: "#333333",
  starSize: "32",
  controlBg: "#2e5090",
  controlColor: "#fff",
  controlSize: "32",
  numberOfStars: 5,
  showControl: true,
  disableClick: false,
  step: 0.5,
});

const emit = defineEmits<{
  (e: "update:modelValue", v: number): void;
}>();

const rating = ref(props.modelValue || 0);

function rounded(value: number, decimalPlaces: number) {
  const power = 10 ** decimalPlaces;
  return Math.round(value * power) / power;
}

function generateEqualWidthAndHeight(size: string | number) {
  return {
    width: `${size}px`,
    height: `${size}px`,
  };
}

function increaseRating() {
  const numberOfStars = props.numberOfStars;
  const newRating = rating.value + props.step;

  rating.value = newRating >= numberOfStars ? numberOfStars : newRating;
}

function decreaseRating() {
  const newRating = rating.value - props.step;

  rating.value = newRating <= 0 ? 0 : newRating;
}

const roundedRating = computed(() => {
  return rounded(rating.value, 1);
});

const percent = computed(() => {
  return (roundedRating.value / props.numberOfStars) * 100 + "%";
});

const starsContainer = ref<HTMLDivElement>();

function adjustRating(this: HTMLDivElement, e: MouseEvent) {
  const relativeX = e.pageX - this.offsetLeft;
  const numberOfStars = props.numberOfStars;

  rating.value = (relativeX / this.offsetWidth) * numberOfStars;
}

onMounted(() => {
  if (starsContainer.value) {
    starsContainer.value.addEventListener("click", adjustRating);
  }
});

onBeforeUnmount(() => {
  if (starsContainer.value) {
    starsContainer.value.removeEventListener("click", adjustRating);
  }
});

watch(roundedRating, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <div class="vue3-star-ratings__wrapper">
    <div class="vue3-star-ratings">
      <button
        v-if="showControl"
        :style="{
          ...generateEqualWidthAndHeight(controlSize),
          backgroundColor: controlBg,
          color: controlColor,
        }"
        @click="decreaseRating"
      >
        <AngleLeft
          :style="{
            ...generateEqualWidthAndHeight(+controlSize - 16),
          }"
        />
      </button>

      <div
        class="stars"
        ref="starsContainer"
        :style="{ pointerEvents: disableClick ? 'none' : 'auto' }"
      >
        <div class="stars-outer" :style="{ color: inactiveColor }">
          <StarIcon
            v-for="i in numberOfStars"
            :key="i"
            :style="{
              ...generateEqualWidthAndHeight(starSize),
            }"
          />
        </div>

        <div class="stars-inner" :style="{ width: percent, color: starColor }">
          <star-icon
            v-for="i in numberOfStars"
            :key="i"
            :style="{
              ...generateEqualWidthAndHeight(starSize),
            }"
          >
          </star-icon>
        </div>
      </div>

      <button
        v-if="showControl"
        :style="{
          ...generateEqualWidthAndHeight(controlSize),
          backgroundColor: controlBg,
          color: controlColor,
        }"
        @click="increaseRating"
      >
        <AngleRight
          :style="{
            ...generateEqualWidthAndHeight(+controlSize - 16),
          }"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.vue3-star-ratings__wrapper {
  display: block;
  text-align: center;
}

.vue3-star-ratings__wrapper * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.vue3-star-ratings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.vue3-star-ratings button {
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
}
.vue3-star-ratings button svg {
  fill: currentColor;
}
.stars {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.stars-outer,
.stars-inner {
  height: inherit;
}
.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  max-width: 100%;
  min-width: 0;
  white-space: nowrap;
  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
}
.stars svg {
  display: inline-block;
  fill: currentColor;
  cursor: pointer;
}
</style>
