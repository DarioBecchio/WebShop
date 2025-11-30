<script>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  setup() {
    const headerRef = ref(null);
    const headerHeight = ref(0);

    const updateHeaderHeight = () => {
      headerHeight.value = headerRef.value?.$el.offsetHeight || 0;
    };

    onMounted(async () => {
      await nextTick();
      updateHeaderHeight();
      window.addEventListener("resize", updateHeaderHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateHeaderHeight);
    });

    return { headerRef, headerHeight };
  },
};
</script>

<template>
  <Header ref="headerRef"></Header>
  <!-- wrapper attorno a router-view per applicare padding-top -->
  <div :style="{ paddingTop: headerHeight + 'px' }">
    <router-view />
  </div>

  <Footer></Footer>
</template>

<style>
/* se vuoi che l'header sia fisso */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
