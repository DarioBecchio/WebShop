<script>
import { useProductStore } from "../stores/product";
//import { useCartStore } from "../stores/cart";
import Card from "../components/Card.vue";

export default {
  name: "Category",
  components: { Card },
  data() {
    return {
      store: useProductStore(),
      cart: useCartStore(),
    };
  },

  mounted() {
    this.store.fetchProducts();
  },
};
</script>

<template>
  <div class="container py-4 layout">
    <h1 class="mb-4">Catalogo Prodotti</h1>
    <p class="text-muted mb-4">Griglia responsive: 5 / 4 / 1 come richiesto.</p>

    <div class="row g-3">
      <div
        :key="p.id"
        class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-3"
      ></div>
    </div>
    <Card :product="p"></Card>
  </div>
</template>

<style scoped>
.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
}
.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
