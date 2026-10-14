<script>
export default {
  name: "Card",
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img
      :src="product.thumbnail"
      class="card-img-top"
      :alt="product.title"
      style="object-fit: cover; height: 180px"
    />

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text small text-muted mb-1">
        <strong>Marca:</strong> {{ product.brand }}
      </p>
      <p class="card-text flex-grow-1">{{ product.description }}</p>

      <div class="mt-auto">
        <p class="mb-1">
          <span
            class="badge bg-secondary me-1"
            v-for="tag in product.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </p>

        <p class="fw-bold mb-2">
          {{ product.price.toFixed(2) + " €" }}
        </p>

        <button class="btn btn-primary w-100">Acquista</button>
      </div>
    </div>
  </div>
</template>
<style></style>
