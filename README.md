# vue3-star-ratings

---

A simple, customizable component for star ratings

## Documentation

---

![](https://res.cloudinary.com/abeydev/image/upload/v1625737162/npm-packages/ezgif.com-gif-maker_2_wt9pw0.gif)

### Features

- SVG-based stars ensure scalable and high-quality display
- Customizable number of stars/ratings
- Customizable icon
- Customizable color options for active and inactive stars

### Demo

You can try out the demo here: [https://vue3-star-ratings.netlify.app/demo](https://vue3-star-ratings.netlify.app/demo/)

### Installation and usage

---

```
npm install vue3-star-ratings --save
```

You can use register it globally like this:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import vue3StarRatings from "vue3-star-ratings";

const app = createApp(App);

app.component("vue3-star-ratings", vue3StarRatings);
```

then use it this in your component:
`<vue3-star-ratings />`

Alternatively, you can use it directly:

```vue
<!-- your-component.vue -->

<template>
  <vue3-star-ratings v-model="rating" />
</template>

<script>
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";

export default defineComponent({
  components: {
    vue3starRatings,
  },
});
</script>
```

### Browser with CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue3-star-ratings"></script>
```

```javascript
const { createApp } = Vue;
const App = {
  //Component code...
};
const app = createApp(App);
app.component("vue3StarRatings", Vue3StarRatings);
app.mount("#app");
```

**The `v-model` directive syncs the rating value between the Vue3StarRatings component and its parent:**

`<vue3-star-ratings v-model="rating"/>`.

## Available Props

| Prop          | Description                                                           | Type      | Default  |
| ------------- | --------------------------------------------------------------------- | --------- | -------- |
| numberOfStars | Specifies the total number of stars displayed and the maximum rating  | Number    | 5        |
| starSize      | Sets the height and width of each star, in pixels                     | Number    | 32       |
| starColor     | Defines the color of active stars                                     | String    | #ff9800  |
| inactiveColor | Sets the color of inactive stars                                      | String    | #333333  |
| disableClick  | Allows you to disable the click event on the stars                    | Boolean   | false    |
| v-model       | Syncs the rating value between the component and its parent component |
| customSvg     | Provides an option for using a custom SVG icon for the star rating    | Component | Built-in |

Customize the component by leveraging these props to meet your specific needs.
