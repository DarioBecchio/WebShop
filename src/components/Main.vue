<script>
import Jumbotron from "./Main/Jumbotron.vue";
export default {
  name: "Main",
  components: {
    Jumbotron,
  },
};
</script>

<template>
  <main>
    <!-- Section 1 -->
    <section
      class="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary text-white"
    >
      <h2>Section 1</h2>
      <p>Contenuto della prima sezione</p>
    </section>

    <!-- Section 2 -->
    <section
      class="vh-100 d-flex flex-column justify-content-center align-items-center bg-success text-white"
    >
      <h2>Section 2</h2>
      <p>Contenuto della seconda sezione</p>
    </section>

    <!-- Section 3 -->
    <section
      class="vh-100 d-flex flex-column justify-content-center align-items-center bg-warning text-dark"
    >
      <h2>Section 3</h2>
      <p>Contenuto della terza sezione</p>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  margin-top: 1rem;
}
</style>
