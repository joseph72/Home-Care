<template>
  <section
    v-if="position === 1"
    class="relative bg-fixed bg-center bg-cover custom-img-1 h-full lg:h-[42rem]"
  >
    <div
      class="flex flex-col gap-4 md:flex-row h-[inherit] smart-container place-items-center"
    >
      <div
        class="bg-tertiary absolute top-0 left-0 opacity-90 h-full w-full"
      ></div>
      <div class="">
        <MyCarousel class="lg:-mb-24 py-12 lg:py-0" slideNumber="1">
          <template #item>
            <slide v-for="slide in items" :key="slide">
              <div
                class="p-12 bg-white block lg:flex w-full bg-opacity-[0.42] gap-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="text-primary fill-transparent stroke-primary w-28 h-[2.7rem]"
                >
                  <path
                    d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
                  ></path>
                </svg>
                <div class="">
                  <p
                    class="italic text-[22px] lg:text-[32px] font-semibold text-primary text-left mb-10"
                  >
                    {{ slide.quotes }}
                  </p>
                  <div class="flex place-items-center gap-4">
                    <img
                      class="w-16 h-16 object-cover"
                      :src="slide.pic"
                      alt=""
                    />
                    <div
                      class="text-secondary font-sans font-semibold uppercase italic"
                    >
                      By {{ slide.name }}
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </template>
        </MyCarousel>
      </div>
    </div>
  </section>

  <section v-if="position === 2">
    <MyCarousel class="mt-20 mb-6" slideNumber="5">
      <template #item>
        <slide v-for="slide in brands" :key="slide">
          <img class="h-14 object-contain" :src="slide" alt="" />
        </slide>
      </template>
    </MyCarousel>
  </section>
</template>

<script setup>
import MyCarousel from "../Carousel.vue";

import { Slide } from "vue3-carousel";

const items = [
  {
    id: 1,
    pic: new URL("@/assets/93.jpg", import.meta.url).href,
    name: "John Doe",
    quotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam elementum libero sed tempor. Pellentesque nec commodo quam. Ut faucibus leo posuere mi libero sed tempor. vehicula maximus ac sodales ex consectetur adipiscing elit libero",
  },
  {
    id: 2,
    pic: new URL("@/assets/93.jpg", import.meta.url).href,
    name: "John Doe",
    quotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam elementum libero sed tempor. Pellentesque nec commodo quam. Ut faucibus leo posuere mi libero sed tempor. vehicula maximus ac sodales ex consectetur adipiscing elit libero",
  },
];

const brands = [
  new URL("@/assets/Group-33.png", import.meta.url).href,
  new URL("@/assets/Group-34.png", import.meta.url).href,
  new URL("@/assets/Group-35.png", import.meta.url).href,
  new URL("@/assets/Group-36.png", import.meta.url).href,
  new URL("@/assets/Group-37.png", import.meta.url).href,
];
</script>
<script>
export default {
  props: {
    position: String,
  },
};
</script>
<style scoped>
.custom-img-1 {
  background-image: url("../../assets/74.jpg");
}
</style>
