import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createCommentVNode, Fragment, renderList, withScopeId } from 'vue';

var script = defineComponent({
  name: "Vue3StarRatings",
  props: {
    starColor: {
      type: String,
      default: "#ff9800"
    },
    inactiveColor: {
      type: String,
      default: "#333"
    },
    starSize: {
      type: String,
      default: '32'
    },
    controlBg: {
      type: String,
      default: '#2e5090'
    },
    controlColor: {
      type: String,
      default: '#fff'
    },
    controlSize: {
      type: String,
      default: '24'
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
      rating: this.modelValue || 0
    };
  },

  watch: {
    roundedRating() {
      this.$emit('update:modelValue', this.roundedRating);
    }

  },
  computed: {
    roundedRating() {
      return this.rounded(this.rating, 1);
    },

    percent() {
      return this.roundedRating / this.numberOfStars * 100 + "%";
    }

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

    rounded(value, decimalPlaces) {
      const power = 10 ** decimalPlaces;
      return Math.round(value * power) / power;
    }

  },

  mounted() {
    const starsCont = this.$refs["starsContainer"];
    const self = this;
    starsCont.addEventListener("click", function (e) {
      const relativeX = e.pageX - this.offsetLeft;
      self.rating = relativeX / this.offsetWidth * self.numberOfStars;
    });
  }

});

const _withId = /*#__PURE__*/withScopeId("data-v-3d93c878");

pushScopeId("data-v-3d93c878");

const _hoisted_1 = {
  class: "vue3-star-ratings__wrapper"
};
const _hoisted_2 = {
  class: "vue3-star-ratings"
};

const _hoisted_3 = /*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 792.082 792.082"
}, [/*#__PURE__*/createVNode("path", {
  d: "M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z"
})], -1);

const _hoisted_4 = /*#__PURE__*/createVNode("path", {
  d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
}, null, -1);

const _hoisted_5 = /*#__PURE__*/createVNode("path", {
  d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
}, null, -1);

const _hoisted_6 = /*#__PURE__*/createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 792.082 792.082"
}, [/*#__PURE__*/createVNode("path", {
  d: "M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z"
})], -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, [_ctx.showControl ? (openBlock(), createBlock("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.decreaseRating && _ctx.decreaseRating(...args)),
    style: {
      height: _ctx.controlSize + 'px',
      width: _ctx.controlSize + 'px',
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [_hoisted_3], 4)) : createCommentVNode("", true), createVNode("div", {
    class: "stars",
    ref: "starsContainer",
    style: {
      height: _ctx.starSize + 'px',
      pointerEvents: _ctx.disableClick ? 'none' : 'auto'
    }
  }, [createVNode("div", {
    class: "stars-outer",
    style: {
      color: _ctx.inactiveColor
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.numberOfStars, i => {
    return openBlock(), createBlock("svg", {
      key: i,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.002 512.002"
    }, [_hoisted_4]);
  }), 128))], 4), createVNode("div", {
    class: "stars-inner",
    style: {
      width: _ctx.percent,
      color: _ctx.starColor
    }
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.numberOfStars, i => {
    return openBlock(), createBlock("svg", {
      key: i,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.002 512.002"
    }, [_hoisted_5]);
  }), 128))], 4)], 4), _ctx.showControl ? (openBlock(), createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.increaseRating && _ctx.increaseRating(...args)),
    style: {
      height: _ctx.controlSize + 'px',
      width: _ctx.controlSize + 'px',
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [_hoisted_6], 4)) : createCommentVNode("", true)])]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.vue3-star-ratings__wrapper[data-v-3d93c878] {\n  display: block;\n  margin: 25px auto;\n  text-align: center;\n  padding: 25px;\n}\n.vue3-star-ratings[data-v-3d93c878] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.vue3-star-ratings button[data-v-3d93c878] {\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.vue3-star-ratings button svg[data-v-3d93c878] {\n  height: calc(100% - 8px);\n  fill: currentColor;\n}\n.stars[data-v-3d93c878] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.stars-outer[data-v-3d93c878], .stars-inner[data-v-3d93c878] {\n  height: inherit;\n}\n.stars-inner[data-v-3d93c878] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  max-width: 100%;\n  min-width: 0;\n  white-space: nowrap;\n  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  overflow: hidden;\n}\n.stars svg[data-v-3d93c878] {\n  display: inline-block;\n  height: inherit;\n  fill: currentColor;\n  cursor: pointer;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-3d93c878";

// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Assign InstallableComponent type
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Vue3StarRatings', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
