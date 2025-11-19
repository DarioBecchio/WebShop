<script>
export default {
  name: "Category",
};
</script>

<template>
  <h1>Category</h1>
  <!-- <div class="category-page container py-4">
    <h1>Prodotti: {{ categoryName }}</h1>

    <div v-if="filteredProducts.length === 0">
      <p>Nessun prodotto trovato in questa categoria.</p>
    </div>

    <div class="products-grid" v-else>
      <div
        class="product-card"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.image" alt="" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.content }}</p>
      </div>
    </div> 
  </div>-->
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
