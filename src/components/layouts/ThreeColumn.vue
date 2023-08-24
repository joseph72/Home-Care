<template>
    <section class="grid w-full grid-flow-row lg:grid-flow-col pt-20 place-items-center smart-container gap-4 mb-24">
        <div class="fill-tertiary hover:fill-accent-3 w-full text-center" v-for="item in feature" :key="item.id">
            <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="74.225" height="62.244" viewBox="0 0 74.225 62.244"
                    class="w-full">
                    <path id="Path_14137" data-name="Path 14137"
                        d="M149.41,319.67c-11-4.25-25.65-5.36-36.55-.06-11.87,5.78-18.5,19.51-13.55,32.19,2.1,5.37,21.35,35,52.65,24.1,11.27-3.94,19.88-13.88,19.92-26.06C171.93,335.84,162,324.51,149.41,319.67Z"
                        transform="translate(-97.655 -316.045)" class="fill-inherit" />
                </svg>
                <img class="object-contain h-full w-full absolute -top-[0.6rem] cursor-pointer hover:-translate-y-2 transition-transform delay-300 ease-out"
                    :src="item.icon" alt="" />
            </div>
            <h3 class="text-4xl font-semibold pt-4 pb-6 text-primary">
                {{ item.title }}
            </h3>
            <p class="text-lg font-normal font-sans">{{ item.excerpt }}</p>
        </div>
    </section>
</template>

<script setup>
const feature = [
    {
        id: 1,
        title: "Doctor Consultation",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: new URL("../../assets/doctor.png", import.meta.url).href,
    },
    {
        id: 2,
        title: "Qualified Staffs",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: new URL("../../assets/diploma.png", import.meta.url).href,
    },
    {
        id: 3,
        title: "Continuity Of Care",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: new URL("../../assets/clipboards.png", import.meta.url).href,
    },
];

</script>

<style></style>