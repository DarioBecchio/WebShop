<script>
import Searchbar from "./Searchbar.vue";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import HeaderRight from "./HeaderRight.vue";
export default {
  name: "Header",
  components: {
    Searchbar,
    Logo,
    Navbar,
    HeaderRight,
  },
};
</script>

<template>
  <header class="container-sm container-md container-xl">
    <div class="layout d-flex justify-content-between p-3">
      <Searchbar></Searchbar>
      <Logo></Logo>
      <HeaderRight></HeaderRight>
    </div>
    <Navbar></Navbar>
  </header>
</template>

<style scoped></style>
