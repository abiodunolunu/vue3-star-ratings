'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
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
  data: function data() {
    return {
      rating: this.modelValue || 0
    };
  },
  watch: {
    roundedRating: function roundedRating() {
      this.$emit('update:modelValue', this.roundedRating);
    }
  },
  computed: {
    roundedRating: function roundedRating() {
      return this.rounded(this.rating, 1);
    },
    percent: function percent() {
      return this.roundedRating / this.numberOfStars * 100 + "%";
    }
  },
  methods: {
    increaseRating: function increaseRating() {
      if (this.rating < this.numberOfStars) {
        this.rating += this.step;
      } else if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }

      if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
    },
    decreaseRating: function decreaseRating() {
      if (this.rating <= 0) {
        return;
      } else {
        this.rating -= this.step;
      }

      if (this.rating < 0) {
        this.rating = 0;
      }
    },
    rounded: function rounded(value, decimalPlaces) {
      var power = Math.pow(10, decimalPlaces);
      return Math.round(value * power) / power;
    }
  },
  mounted: function mounted() {
    var starsCont = this.$refs["starsContainer"];
    var self = this;
    starsCont.addEventListener("click", function (e) {
      var relativeX = e.pageX - this.offsetLeft;
      self.rating = relativeX / this.offsetWidth * self.numberOfStars;
    });
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-3d93c878");

vue.pushScopeId("data-v-3d93c878");

var _hoisted_1 = {
  class: "vue3-star-ratings__wrapper"
};
var _hoisted_2 = {
  class: "vue3-star-ratings"
};

var _hoisted_3 = /*#__PURE__*/vue.createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 792.082 792.082"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z"
})], -1);

var _hoisted_4 = /*#__PURE__*/vue.createVNode("path", {
  d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
}, null, -1);

var _hoisted_5 = /*#__PURE__*/vue.createVNode("path", {
  d: "M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"
}, null, -1);

var _hoisted_6 = /*#__PURE__*/vue.createVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 792.082 792.082"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z"
})], -1);

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [_ctx.showControl ? (vue.openBlock(), vue.createBlock("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.decreaseRating && _ctx.decreaseRating.apply(_ctx, arguments);
    }),
    style: {
      height: _ctx.controlSize + 'px',
      width: _ctx.controlSize + 'px',
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [_hoisted_3], 4)) : vue.createCommentVNode("", true), vue.createVNode("div", {
    class: "stars",
    ref: "starsContainer",
    style: {
      height: _ctx.starSize + 'px',
      pointerEvents: _ctx.disableClick ? 'none' : 'auto'
    }
  }, [vue.createVNode("div", {
    class: "stars-outer",
    style: {
      color: _ctx.inactiveColor
    }
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.numberOfStars, function (i) {
    return vue.openBlock(), vue.createBlock("svg", {
      key: i,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.002 512.002"
    }, [_hoisted_4]);
  }), 128))], 4), vue.createVNode("div", {
    class: "stars-inner",
    style: {
      width: _ctx.percent,
      color: _ctx.starColor
    }
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.numberOfStars, function (i) {
    return vue.openBlock(), vue.createBlock("svg", {
      key: i,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.002 512.002"
    }, [_hoisted_5]);
  }), 128))], 4)], 4), _ctx.showControl ? (vue.openBlock(), vue.createBlock("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.increaseRating && _ctx.increaseRating.apply(_ctx, arguments);
    }),
    style: {
      height: _ctx.controlSize + 'px',
      width: _ctx.controlSize + 'px',
      backgroundColor: _ctx.controlBg,
      color: _ctx.controlColor
    }
  }, [_hoisted_6], 4)) : vue.createCommentVNode("", true)])]);
});function styleInject(css, ref) {
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
}var css_248z = "\n.vue3-star-ratings__wrapper[data-v-3d93c878] {\n  display: block;\n  margin: 25px auto;\n  text-align: center;\n  padding: 25px;\n}\n.vue3-star-ratings[data-v-3d93c878] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.vue3-star-ratings button[data-v-3d93c878] {\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.vue3-star-ratings button svg[data-v-3d93c878] {\n  height: calc(100% - 8px);\n  fill: currentColor;\n}\n.stars[data-v-3d93c878] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.stars-outer[data-v-3d93c878], .stars-inner[data-v-3d93c878] {\n  height: inherit;\n}\n.stars-inner[data-v-3d93c878] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  max-width: 100%;\n  min-width: 0;\n  white-space: nowrap;\n  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  overflow: hidden;\n}\n.stars svg[data-v-3d93c878] {\n  display: inline-block;\n  height: inherit;\n  fill: currentColor;\n  cursor: pointer;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-3d93c878";// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('Vue3StarRatings', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;