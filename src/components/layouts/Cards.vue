<template v-if="position === 1">
  <div class="grid gap-8 lg:grid-cols-[1fr_1fr] flex-[1] lg:mt-12 w-full">
    <div
      v-for="item in achievements"
      :key="item.id"
      class="shadow-md p-8 py-9 first:bg-accent-2 first:text-white first:hover:bg-accent h-[265px] w-full bg-accent-4 flex-[1] text-primary text-lg font-semibold text-center grid place-items-center"
    >
      <img class="h-20 w-20" :src="item.icon" alt="" />
      <div>
        <p class="text-[50px] font-bold py-4">
          {{ item.number }}
        </p>
        <p class="capitalize font-bold">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const achievements = [
  {
    id: 1,
    icon: new URL("../../assets/caduceus-symbol.png", import.meta.url).href,
    number: 19,
    title: "Years Of Experience",
  },
  {
    id: 2,
    icon: new URL("../../assets/heart.png", import.meta.url).href,
    number: "4,610",
    title: "Happy Customers",
  },
  {
    id: 3,
    icon: new URL("../../assets/team.png", import.meta.url).href,
    number: 19,
    title: "Qualified Staffs",
  },
  {
    id: 4,
    icon: new URL("../../assets/round-test-tube.png", import.meta.url).href,
    number: "1,200",
    title: "Services Completed",
  },
];
</script>
<script>
export default {
  props: {
    position: String,
  },
};
</script>
