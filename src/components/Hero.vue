<template>
  <div
    class="lg:flex pt-[50%] lg:pt-[15%] pb-[7.5%] px-[10%] place-items-center grid gap-16"
  >
    <div class="w-full lg:pr-14 shrink-[1.45] text-center lg:text-right">
      <div
        class="text-[40px] lg:text-[64px] font-bold text-primary leading-tight"
      >
        Advanced Healthcare Made Personal
      </div>
      <p class="text-2xl font-semibold my-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <button
        class="btn-primary uppercase inline-flex place-content-between place-items-center"
      >
        <span>Get Started</span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="w-full relative z-10">
      <img
        class="w-full h-full object-cover object-left"
        src="../assets/5.jpg"
        alt=""
      />
      <img
        class="w-full absolute top-8 lg:top-12 -z-10 -right-8 lg:-right-20 object-cover h-[80%]"
        src="../assets/6.jpg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>
