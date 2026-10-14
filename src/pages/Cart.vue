<script>
import { useCartStore } from "../stores/cart";

export default {
  name: "Cart",

  data() {
    return {
      cart: useCartStore(),
    };
  },

  computed: {
    cartItems() {
      return this.cart.items;
    },

    total() {
      return this.cart.totalPrice;
    },
  },
};
</script>

<template>
  <div class="container py-4">
    <h1>Carrello</h1>

    <div v-if="cartItems.length">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.thumbnail" :alt="item.title" class="product-image" />

        <div class="item-info">
          <h3>{{ item.title }}</h3>
          <p>Quantità: {{ item.qty }}</p>
          <p>Prezzo: {{ item.price }} €</p>
          <p class="item-total">Subtotale: {{ item.qty * item.price }} €</p>
        </div>
      </div>

      <div class="cart-total">
        <strong>Totale: {{ total }} €</strong>
      </div>
    </div>

    <div v-else>
      <p>Il tuo carrello è vuoto.</p>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.item-info h3 {
  margin: 0 0 4px;
}

.item-info p {
  margin: 2px 0;
}

.item-total {
  font-weight: bold;
}

.cart-total {
  text-align: right;
  margin-top: 16px;
  font-size: 1.2rem;
}

/* 📱 Mobile */
@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-image {
    width: 100%;
    height: auto;
  }

  .cart-total {
    text-align: left;
  }
}
</style>
