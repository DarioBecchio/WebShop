<script>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";
export default {
  name: "Cart",
  setup() {
    const cart = useCartStore();

    const cartItems = computed(() => cart.items);
    const total = computed(() => cart.totalPrice);

    return {
      cartItems,
      total,
      cart,
    };
  },
};
</script>

<template>
  <div class="container py-4">
    <h1>Carrello</h1>

    <div v-if="cartItems.length && cartItems.length">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        {{ item.name }} - {{ item.qty }} x {{ item.price }}€
      </div>

      <p>Totale: {{ total }}€</p>
    </div>
    <div v-else>
      <p>Il tuo carrello è vuoto.</p>
    </div>
  </div>
</template>

<style></style>
