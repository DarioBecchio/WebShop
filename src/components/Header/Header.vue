<script>
import Searchbar from "./Searchbar.vue";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import HeaderRight from "./HeaderRight.vue";
import BurgerMenù from "./BurgerMenù.vue";
export default {
  name: "Header",
  components: {
    Searchbar,
    Logo,
    Navbar,
    HeaderRight,
    BurgerMenù,
  },
};
</script>

<template>
  <header class="container-sm container-md container-xl">
    <div class="d-flex align-middle justify-content-between p-3">
      <!-- Lato sinistro -->
      <div class="col-4 d-flex align-items-center">
        <!-- Menù a burger -->
        <!-- Desktop searchbar visibile solo su lg+ -->
        <div class="d-none d-md-block flex-grow-1 mx-3">
          <Searchbar></Searchbar>
        </div>
        <div class="d-block d-md-none flex-grow-1 mx-3">
          <BurgerMenù></BurgerMenù>
        </div>
      </div>

      <!-- Centro -->
      <div class="col-4 d-flex justify-content-center align-items-center">
        <Logo></Logo>
      </div>

      <!-- Lato destro -->
      <div class="col-4 d-flex justify-content-end align-items-center">
        <HeaderRight></HeaderRight>
      </div>
    </div>

    <!-- Navbar desktop -->
    <div class="d-none d-md-block mt-2">
      <Navbar />
    </div>
  </header>
</template>

<style scoped></style>
