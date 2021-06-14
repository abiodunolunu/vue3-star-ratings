<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Vue3StarRatings",
  props: {
    starColor: {
      type: String,
      default: "#ff9800",
    },
    inactiveColor: {
      type: String,
      default: "#333",
    },
    starSize: {
      type: String,
      default: '32'
    },
    controlBg: {
      type: String,
      default:  '#2e5090'
    },
    controlColor: {
      type: String,
      default: '#fff'
    },
    controlSize: {
      type: String,
      default: '24',
    },
    numberOfStars: {
      type: Number,
      default: 5
    },
    showControl: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Number
    },
    disableClick: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 0.5
    }
  },
  data() {
    return {
      rating: this.modelValue || 0,
    };
  },
  watch: {
    roundedRating() {
      this.$emit('update:modelValue', this.roundedRating)
    }
  },
  computed: {
    roundedRating(): number {
      return this.rounded(this.rating, 1);
    },
    percent(): string {
      return (this.roundedRating / this.numberOfStars) * 100 + "%";
    },
  },
  methods: {
    increaseRating() {
      if (this.rating < this.numberOfStars) {
        this.rating += this.step;
      } else if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
      if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
    },
    decreaseRating() {
      if (this.rating <= 0) {
        return;
      } else {
        this.rating -= this.step;
      }

      if (this.rating < 0) {
        this.rating = 0;
      }
    },

    rounded(value: number, decimalPlaces: number) {
      const power = 10 ** decimalPlaces;
      return Math.round(value * power) / power;
    },
  },
  mounted() {
    const starsCont = this.$refs["starsContainer"] as HTMLDivElement;
    const self = this;

    starsCont.addEventListener("click", function(e) {
      const relativeX = e.pageX - this.offsetLeft;
      self.rating = (relativeX / this.offsetWidth) * self.numberOfStars;
    });
  },
});
</script>

<template>
  <div class="vue3-star-ratings__wrapper">
    <div class="vue3-star-ratings">
      <button v-if="showControl" @click="decreaseRating" :style="{height: controlSize + 'px', width: controlSize + 'px', backgroundColor: controlBg, color: controlColor}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.082 792.082">
          <path d="M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z" />
        </svg>
      </button>
      <div class="stars" ref="starsContainer" :style="{height: starSize + 'px', pointerEvents: disableClick ? 'none' : 'auto'}">
        <div class="stars-outer" :style="{ color: inactiveColor }">
          <svg v-for="i in numberOfStars" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002">
            <path
                d="M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
            />
          </svg>
        </div>
        <div class="stars-inner" :style="{ width: percent, color: starColor }">
          <svg v-for="i in numberOfStars" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002">
            <path
                d="M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
            />
          </svg>
        </div>
      </div>
      <button v-if="showControl" @click="increaseRating"  :style="{height: controlSize + 'px', width: controlSize + 'px', backgroundColor: controlBg, color: controlColor}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.082 792.082">
          <path d="M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.vue3-star-ratings__wrapper {
  display: block;
  margin: 25px auto;
  text-align: center;
  padding: 25px;
}

.vue3-star-ratings {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vue3-star-ratings button {
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.vue3-star-ratings button svg {
  height: calc(100% - 8px);
  fill: currentColor;
}

.stars {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.stars-outer, .stars-inner {
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
  height: inherit;
  fill: currentColor;
  cursor: pointer;
}
</style>
