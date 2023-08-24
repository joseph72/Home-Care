<template>
  <section class="text-center lg:text-left" v-if="position === 1">
    <h3
      class="lg:text-lg text-base font-semibold uppercase text-secondary font-sans pb-12 mt-8"
      :class="[
        { 'pt-6': textPosition === 'left' },
        { 'mt-8': textPosition === 'right' },
      ]"
    >
      About Us
    </h3>
    <h1
      class="text-4xl lg:text-6xl font-semibold capitalize text-primary pb-10"
    >
      Health Is The First Step To Prosperity
    </h1>

    <p
      class="text-lg font-normal font-sans pb-6"
      v-for="(item, index) in [1, 2, 3]"
      :key="index"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed
      pulvinar proin gravida hendrerit lectus.
    </p>

    <h6 class="sign text-[36px] text-secondary">Evomind H.</h6>
  </section>

  <section class="flex-[1.4]" v-if="position === 2">
    <div
      class="shrink-[1.5] flex flex-col lg:place-items-end place-items-center"
    >
      <div class="relative">
        <lottie-player
          src="https://lottie.host/58ce88a3-5656-4e88-9bb4-e4fd05f1d2b6/ZHl0fp62Vz.json"
          background="transparent"
          speed="1"
          style="
            width: 150px;
            height: 150px;
            position: absolute;
            top: 5rem;
            left: 5rem;
            z-index: 1;
          "
          loop
          autoplay
        ></lottie-player>

        <img src="../../assets/26.jpg" alt="" />
      </div>
      <h3
        class="lg:text-lg text-base font-semibold uppercase text-secondary font-sans pb-12 mt-8"
      >
        About Us
      </h3>
      <h1
        class="text-4xl lg:text-6xl font-semibold capitalize text-primary pb-10 lg:text-end text-center"
      >
        Because Your Life Matters
      </h1>
      <p class="text-lg font-normal font-sans pb-6 lg:text-end text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p class="text-lg font-normal font-sans pb-6 lg:text-end text-center">
        Proin eleifend in mi eu efficitur. Sed interdum lectus at consequat
        interdum. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
        dapibus leo.
      </p>

      <button
        class="btn-primary uppercase inline-flex place-content-between place-items-center"
      >
        <span>Read More</span>
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
  </section>
  <section class="flex-[1] lg:ml-60" v-if="position === 3">
    <div class="text-left">
      <h3
        class="text-base lg:text-lg font-semibold uppercase text-secondary font-sans pb-12 mt-8"
      >
        Our Services
      </h3>
      <h1 class="text-4xl lg:text-6xl font-bold capitalize text-primary pb-10">
        Home Health Care
      </h1>
      <p class="text-lg font-normal font-sans pb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo
      </p>

      <div
        v-for="service in 3"
        :key="service"
        class="flex space-x-2 place-items-center pb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          class="fill-secondary"
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        <div class="text-primary text-[26px] font-semibold italic">
          Senior Care
        </div>
      </div>

      <button
        class="btn-primary uppercase inline-flex place-content-between place-items-center"
      >
        <span class="font-semibold">Explore Services</span>
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
  </section>
  <section class="flex-[1]" v-if="position === 4">
    <div class="text-center lg:text-left">
      <h3
        class="text-base lg:text-lg font-semibold uppercase text-secondary font-sans pb-12 mt-8"
      >
        Home Healthcare
      </h3>
      <h1 class="text-4xl lg:text-6xl font-bold capitalize text-primary pb-10">
        Best Of Care, Close To Home.
      </h1>
      <p class="text-lg font-normal font-sans pb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo
      </p>
      <p class="text-lg font-normal font-sans pb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  </section>
  <section class="flex-[1] text-center lg:text-left" v-if="position === 5">
    <div>
      <h3
        class="lg:text-lg text-base font-semibold uppercase text-secondary font-sans pb-12 mt-8"
      >
        SOME OF OUR WORK
      </h3>
      <h1 class="text-4xl lg:text-6xl font-bold capitalize text-primary pb-10">
        Choose Confidently
      </h1>
      <p class="text-lg font-normal font-sans pb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo
      </p>
      <img src="../../assets/91.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    textPosition: String,
    position: String,
  },
};
</script>

<style scoped>
.sign {
  font-family: "La Belle Aurore", cursive;
}
</style>
