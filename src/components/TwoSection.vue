<template>
  <section class="relative">
    <div
      :class="flexDirection"
      class="flex lg:flex-row lg:text-left gap-4 h-[inherit] smart-container place-items-center"
    >
      <div
        :class="show"
        class="bg-tertiary absolute top-0 left-0 opacity-80 h-full w-full"
      ></div>
      <div class="">
        <slot name="lhs"> </slot>
      </div>
      <div class="flex-1">
        <slot name="rhs"></slot>
      </div>
    </div>

    <slot name="opt"></slot>
    <div
      :class="flexDirection"
      class="flex lg:flex-row smart-container place-items-center gap-8"
    >
      <slot name="leftSide"></slot>
      <slot name="rightSide"></slot>
    </div>
    <div
      :class="flexDirection"
      class="flex lg:flex-row place-items-center gap-8 background-cc smart-container"
    >
      <div class="flex-1">
        <slot name="leftSideBg"></slot>
      </div>
      <div class="flex-1 pt-16 lg:pt-0">
        <slot name="rightSideBg"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    flexDirection: {
      type: String,
    },
    show: {
      type: String,
    },
    bgVisible: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
