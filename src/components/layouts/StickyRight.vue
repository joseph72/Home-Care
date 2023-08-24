<template>
  <section
    class="block lg:flex smart-container relative z-10"
    v-if="position === 1"
  >
    <div class="w-full flex-2"></div>

    <div
      class="shadow-md p-8 py-12 bg-accent-2 text-center lg:text-left text-white text-lg font-semibold font-sans w-full lg:w-[50%] lg:[34%] mb-6 lg:-mb-16 relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="fill-white bg-accent p-2.5 rounded-full w-16 h-16 absolute -top-9"
      >
        <path
          d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"
        ></path>
      </svg>
      <span
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, total</span
      >
    </div>
  </section>

  <section
    class="block lg:flex smart-container relative z-10 py-3"
    v-if="position === 2"
  >
    <div class="w-full flex-[3.5]"></div>

    <div
      class="shadow-md p-8 py-9 bg-accent-2 flex-[1] h-[229px] text-white text-lg font-semibold w-full lg:w-[50%] lg:[34%] mb-2 lg:-mb-40 grid place-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="stroke-white stroke-2 w-20 h-20 fill-transparent pb-6"
      >
        <path
          d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"
        ></path>
      </svg>
      <div>
        <p class="text-[50px] font-semibold text-white pb-4">4,610</p>
        <p class="capitalize text-white font-medium">Happy Customers</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    position: Number,
  },
};
</script>

<style></style>
