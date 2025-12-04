<script>
import { onMounted } from "vue";
import { useProductStore } from "../stores/product";
import { useCartStore } from "../stores/cart";
export default {
  name: "Category",

  setup() {
    const store = useProductStore();
    const cart = useCartStore();

    onMounted(() => {
      store.fetchProducts();
    });

    return { store, cart };
  },
};
</script>

<template>
  <div class="container py-4 layout">
    <h1 class="mb-4">Catalogo Prodotti</h1>
    <p class="text-muted mb-4">Griglia responsive: 5 / 4 / 1 come richiesto.</p>

    <div class="row g-3">
      <div
        v-for="p in store.products"
        :key="p.id"
        class="col-12 col-md-3 col-lg-2-4 col-xl-2-4 custom-col layout"
      >
        <div class="card h-100 shadow-sm">
          <img :src="p.images" class="card-img-top" :alt="p.title" />

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ p.title }}</h5>
            <p class="card-text text-muted">{{ p.description }}</p>

            <div
              class="mt-auto d-flex justify-content-between align-items-center"
            >
              <strong>€{{ p.price }}</strong>
              <button class="btn btn-primary btn-sm" @click="cart.addToCart(p)">
                Aggiungi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
