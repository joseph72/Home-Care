<template>
  <carousel :autoplay="2000" :wrap-around="true" :items-to-show="slideNumber">
    <slot name="item"></slot>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel } from "vue3-carousel";

export default {
  name: "MyCarousel",
  components: {
    Carousel,
  },
  props: {
    slideNumber: {
      type: Number,
    },
  },
};
</script>
