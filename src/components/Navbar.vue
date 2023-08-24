<template>
  <div class="absolute top-0 z-10 w-full">
    <nav
      class="flex items-center justify-between flex-wrap bg-transparent drop-shadow pt-1.5 lg:px-[10%]"
    >
      <a
        href="/"
        class="flex grow items-center space-x-2 cursor-pointer flex-shrink-0 text-white mr-6 px-4"
      >
        <img class="h-6" src="" alt="logo" />
      </a>
      <div @click="isOpen = !isOpen" class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 text-black dark:text-primary hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
      <div
        class="bg-white lg:bg-transparent space-x-0 px-4 lg:p-0 lg:space-x-2 w-full block flex-grow-[0.2] lg:inline-flex lg:items-center lg:w-auto"
        :class="{ hidden: isOpen }"
      >
        <ul
          class="space-x-2 px-4 lg:p-0 lg:space-x-2 w-full block flex-grow-[0.2] lg:inline-flex lg:items-center lg:w-auto"
        >
          <li>
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 lg:p-[20px_28px] text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
            >
              Home
            </a>
          </li>
          <li @click="show = !show" class="group">
            <a
              class="flex mt-4 lg:inline-flex lg:mt-0 lg:p-[20px_28px] space-x-2 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
            >
              <span class="font-semibold"> About</span>
              <span class="h-3 w-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  /></svg
              ></span>
            </a>
            <ul
              class="relative lg:absolute lg:bg-white lg:drop-shadow-sm border-0 lg:group-hover:block lg:group-hover:-translate-y-2 transition-transform delay-300 ease-out"
              :class="{ hidden: show }"
            >
              <li
                class="block mt-4 lg:inline-block lg:mt-0 lg:p-[10px_28px] w-40 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
              >
                About Us
              </li>
              <li
                class="block mt-4 lg:inline-block lg:mt-0 lg:p-[10px_28px] w-40 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
              >
                Teams
              </li>
            </ul>
          </li>
          <li @click="service = !service" class="group">
            <a
              class="flex mt-4 lg:inline-flex lg:mt-0 lg:p-[20px_28px] space-x-2 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
            >
              <span class="font-semibold"> Services</span>
              <span class="h-3 w-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  /></svg
              ></span>
            </a>
            <ul
              class="relative lg:absolute lg:bg-white lg:drop-shadow-sm border-0 lg:group-hover:block lg:group-hover:-translate-y-2 transition-transform delay-300 ease-out"
              :class="{ hidden: service }"
            >
              <li
                class="block mt-4 lg:inline-block lg:mt-0 lg:p-[10px_28px] w-40 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
              >
                Services
              </li>
            </ul>
          </li>
          <li @click="pages = !pages" class="group">
            <a
              class="flex mt-4 lg:inline-flex lg:mt-0 lg:p-[20px_28px] space-x-2 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
            >
              <span class="font-semibold"> Pages</span>
              <span class="h-3 w-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  /></svg
              ></span>
            </a>
            <ul
              class="relative lg:absolute lg:bg-white lg:drop-shadow-sm border-0 lg:group-hover:block lg:group-hover:-translate-y-2 transition-transform delay-300 ease-out"
              :class="{ hidden: pages }"
            >
              <li
                class="block mt-4 lg:inline-block lg:mt-0 lg:p-[10px_28px] w-40 text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg place-items-center cursor-pointer"
              >
                FAQ
              </li>
            </ul>
          </li>
          <li>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 lg:p-[20px_28px] text-primary italic dark:text-primary hover:text-accent-2 capitalize font-semibold text-lg cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="inline-flex lg:inline-flex space-x-3 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            class="h-[34px] fill-white p-2 bg-primary rounded-full cursor-pointer hover:bg-transparent ease-out hover:border-primary hover:fill-primary hover:border hover:-translate-y-2 transition-transform delay-300"
          >
            <path
              d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            class="h-[34px] fill-white p-2 bg-primary rounded-full cursor-pointer hover:bg-transparent ease-out hover:border-primary hover:fill-primary hover:border hover:-translate-y-2 transition-transform delay-300"
          >
            <path
              d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            class="h-[34px] fill-white p-2 bg-primary rounded-full cursor-pointer hover:bg-transparent ease-out hover:border-primary hover:fill-primary hover:border hover:-translate-y-2 transition-transform delay-300"
          >
            <path
              d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"
            ></path>
            <circle cx="16.806" cy="7.207" r="1.078"></circle>
            <path
              d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      isOpen: true,
      show: true,
      service: true,
      pages: true,
    };
  },
};
</script>
<style lang="scss" scoped></style>
