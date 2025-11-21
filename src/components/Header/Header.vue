<script>
import Searchbar from "./Searchbar.vue";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import HeaderRight from "./HeaderRight.vue";
import BurgerMenù from "./BurgerMenù.vue";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const headerEl = ref(null);
const headerHeight = ref(0);

const updateHeaderHeight = () => {
  headerHeight.value = headerEl.value?.offsetHeight || 0;
};

// Aggiorna altezza dopo il montaggio e ogni resize
onMounted(async () => {
  await nextTick();
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});
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
  <header ref="headerEl" class="fixed-top w-100 bg-white shadow-sm">
    <div class="container-sm container-md container-xl">
      <div
        class="d-flex align-items-center justify-content-between py-3 px-2 px-md-4"
      >
        <!-- Lato sinistro -->
        <div class="col-4 d-flex align-items-center">
          <div class="d-none d-md-block flex-grow-1 mx-3">
            <Searchbar />
          </div>
          <div class="d-block d-md-none flex-grow-1 mx-3">
            <BurgerMenù />
          </div>
        </div>

        <!-- Centro -->
        <div class="col-4 d-flex justify-content-center align-items-center">
          <Logo />
        </div>

        <!-- Lato destro -->
        <div class="col-4 d-flex justify-content-end align-items-center">
          <HeaderRight />
        </div>
      </div>

      <!-- Navbar desktop -->
      <div class="d-none d-md-block mt-2">
        <Navbar />
      </div>
    </div>
  </header>

  <!-- Contenuto principale -->
  <main :style="{ paddingTop: headerHeight + 'px' }">
    <slot></slot>
  </main>
</template>

<style scoped>
header {
  z-index: 1030; /* sopra il contenuto */
}
</style>
