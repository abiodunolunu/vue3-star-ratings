<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import StarIcon from "./Star.vue";

interface Props {
  modelValue?: number;
  numberOfStars?: number;
  starColor?: string;
  inactiveColor?: string;
  starSize?: number;
  disableClick?: boolean;
  customSvg?: typeof StarIcon;
}

interface Emit {
  (e: "update:modelValue", v: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  numberOfStars: 5,
  starSize: 24,
  modelValue: 0,
  starColor: "#ff9800",
  inactiveColor: "#333333",
  customSvg: StarIcon,
});

const emit = defineEmits<Emit>();

const componentToDisplay = computed(() => {
  return props.customSvg || StarIcon;
});

const utils = {
  rounded(value: number, decimalPlaces: number) {
    const power = Math.pow(10, decimalPlaces);
    return Math.round(value * power) / power;
  },
};

const starsContainer = ref<HTMLDivElement>();

const rating = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    const roundedVal = utils.rounded(newVal, 1);
    emit("update:modelValue", roundedVal);
  },
});

function adjustRating(this: HTMLDivElement, e: MouseEvent) {
  if (props.disableClick) return;
  const { offsetLeft, offsetWidth } = this;
  const { pageX } = e;
  const relativeX = pageX - offsetLeft;

  const numberOfStars = props.numberOfStars;

  const result = (relativeX / offsetWidth) * numberOfStars;

  rating.value = result;
}

const percent = computed(() => {
  const normalizedRating =
    rating.value < 0
      ? 0
      : rating.value > props.numberOfStars
        ? props.numberOfStars
        : rating.value;

  return (normalizedRating / props.numberOfStars) * 100;
});

watchEffect(() => {
  const styleValues = {
    "--vue3StarRatingsInnerColor": props.inactiveColor,
    "--vue3StarRatingsOuterColor": props.starColor,
    "--vue3StarRatingOuterWidth": `${percent.value}%`,
    "--vue3StarRatingIconSize": `${props.starSize}px`,
  };

  for (const [key, value] of Object.entries(styleValues)) {
    starsContainer.value?.style.setProperty(key, value);
  }
});

onMounted(() => {
  starsContainer.value?.addEventListener("click", adjustRating);
});

onBeforeUnmount(() => {
  starsContainer.value?.removeEventListener("click", adjustRating);
});
</script>

<template>
  <div class="vue3-star-ratings" ref="starsContainer" :style="{
    pointerEvents: disableClick ? 'none' : 'auto',
  }">
    <div class="vue3-star-ratings__outer">
      <component :is="componentToDisplay" v-for="i in numberOfStars" :key="i" class="vue3-star-ratings__icon" />
    </div>
    <div class="vue3-star-ratings__inner">
      <component :is="componentToDisplay" v-for="i in numberOfStars" :key="i" class="vue3-star-ratings__icon" />
    </div>
  </div>
</template>

<style scoped>
.vue3-star-ratings {
  width: fit-content;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.vue3-star-ratings * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
}

.vue3-star-ratings__inner,
.vue3-star-ratings__outer {
  height: inherit;
}

.vue3-star-ratings__outer {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--vue3StarRatingOuterWidth);
  max-width: 100%;
  overflow: hidden;
  color: var(--vue3StarRatingsOuterColor);
  transition: width 320ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.vue3-star-ratings__inner {
  color: var(--vue3StarRatingsInnerColor);
}

.vue3-star-ratings__icon {
  fill: currentColor;
  width: var(--vue3StarRatingIconSize);
  aspect-ratio: 1;
  cursor: pointer;
}
</style>
