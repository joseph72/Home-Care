<template>
  <section
    v-if="position === 2"
    class="flex flex-col-reverse lg:flex-row lg:text-left gap-4 h-[inherit] smart-container bg-fixed bg-center bg-cover place-items-center custom-img"
  >
    <div
      :class="show"
      class="bg-tertiary absolute top-0 left-0 opacity-80 h-full w-full"
    ></div>
    <div class="">
      <img
        class="w-full h-[46rem] object-contain"
        src="../../assets/02.png"
        alt=""
      />
    </div>
    <div class="flex-1">
      <TextItem :textPosition="left" :position="1" />
    </div>
  </section>

  <section
    class="pt-16 pb-4 flex-col flex lg:flex-row gap-10 smart-container place-items-center"
    flexDirection="flex-col text-center"
    show="hidden"
    v-if="position === 2"
  >
    <TextItem :textPosition="left" :position="2" />

    <div class="h-full lg:h-[34rem] w-full flex-[2]">
      <img
        class="w-full h-full object-cover"
        src="../../assets/33.jpg"
        alt=""
      />
    </div>
  </section>
  <section
    show="hidden"
    class="flex flex-col-reverse lg:flex-row smart-container place-items-center gap-8 background-cc"
    v-if="position === 3"
  >
    <div class="h-full w-full flex-1">
      <div class="relative py-24">
        <div>
          <img class="object-cover" src="../../assets/75.jpg" alt="" />
        </div>
        <div
          class="relative lg:-mt-[18rem] lg:ml-[18.5rem] lg:right-[-15%] w-full"
        >
          <img
            class="object-cover h-[429px]"
            src="../../assets/76.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <TextItem :position="3" />
  </section>
  <section
    class="pt-16 pb-4 flex lg:flex-row smart-container place-items-center gap-8 flex-col"
    v-if="position === 4"
  >
    <Cards :position="1" />
    <TextItem :position="4" />
  </section>
  <section
    v-if="position === 5"
    class="pt-16 pb-4 flex-col flex lg:flex-row smart-container place-items-center gap-8"
  >
    <div class="relative flex-[1]">
      <lottie-player
        src="https://lottie.host/58ce88a3-5656-4e88-9bb4-e4fd05f1d2b6/ZHl0fp62Vz.json"
        background="transparent"
        speed="1"
        style="
          width: 150px;
          height: 150px;
          position: absolute;
          top: 35%;
          left: 34%;
          z-index: 1;
        "
        class=""
        loop
        autoplay
      ></lottie-player>

      <img src="../../assets/18.jpg" alt="" />
    </div>
    <TextItem :position="5" />
  </section>
</template>

<script setup>
import TextItem from "./TextItem.vue";
import Cards from "./Cards.vue";
</script>
<script>
export default {
  props: {
    position: String,
  },
};
</script>
<style scoped>
.background-cc {
  background-image: linear-gradient(90deg, #e7f9ff 50%, #ffffff 0%);
}
.custom-img {
  background-image: url("../../assets/p2.jpg");
}
</style>
