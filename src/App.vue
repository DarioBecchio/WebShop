<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<style></style>
