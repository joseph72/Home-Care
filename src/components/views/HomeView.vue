<template>
  <header class="relative min-h-full h-[110vh] lg:h-full">
    <NavBar />
    <div class="flex h-full w-full absolute z-0">
      <div class="bg-white w-full"></div>
      <div class="bg-tertiary w-full"></div>
    </div>
    <HeroSection />
  </header>

  <main>
    <Main />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import NavBar from "../Navbar.vue";
import Main from "../Main.vue";
import Footer from "../Footer.vue";
import HeroSection from "../Hero.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Main,
    Footer,
    HeroSection,
  },
};
</script>
<style></style>
