<script>
import { useMainStore } from "../../stores/product";
export default {
  name: "Searchbar",
  data() {
    return {
      useMainStore,
    };
  },
  methods: {
    test() {
      // Naviga verso la pagina dei risultati passando il testo della ricerca come query
      this.$router.push({
        path: "/searchresults",
        query: { q: this.useMainStore.searchtext },
      });
    },
  },
};
</script>

<template>
  <div class="leftside search-container input-group align-self-center w-80">
    <input
      class="form-control"
      type="text"
      placeholder="Cerca..."
      v-model="useMainStore.searchtext"
      @keyup.enter="test"
    />
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<style scoped>
.search-container input {
  width: 90%;
  padding: 8px 35px 8px 10px; /* spazio per l’icona */
  border: 1px solid #ccc;
}

.search-container i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
}
</style>
