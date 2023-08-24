<template>
  <ThreeColumn />
  <StickyRight :position="1" />
  <ImageText :position="1" />
  <ImageText :position="2" />
  <StickyRight :position="2" />
  <OneSection :position="1" />
  <ImageText :position="3" />
  <ImageText :position="4" />
  <ImageText :position="5" />
  <OneSection :position="2" />
</template>

<script setup>
import ThreeColumn from "../components/layouts/ThreeColumn.vue";
import StickyRight from "../components/layouts/StickyRight.vue";
import ImageText from "../components/layouts/ImageText.vue";
import OneSection from "../components/layouts/OneSection.vue";
</script>

<style scoped></style>
