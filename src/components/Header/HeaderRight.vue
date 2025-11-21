<script>
export default {
  name: "HeaderRight",
};
</script>

<template>
  <div class="header-right d-flex align-items-center gap-1 gap-md-3">
    <RouterLink to="/account" class="icon">
      <i class="fa-regular fa-user"></i>
    </RouterLink>

    <RouterLink to="/wishlist" class="icon">
      <i class="fa-regular fa-heart"></i>
    </RouterLink>

    <RouterLink to="/cart" class="icon position-relative">
      <i class="fa-solid fa-cart-shopping"></i>

      <!-- Pallino conteggio prodotti -->
      <span class="cart-count">3</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* distanza tra icone desktop */
  font-size: 1.5rem; /* dimensione icone desktop */
}

/* Icone */
.header-right .icon {
  color: #333;
  font-size: inherit; /* eredita la dimensione del container */
}

/* Pallino carrello */
.cart-count {
  position: absolute;
  top: -4px;
  right: -6px;
  background: red;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 50%;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile: ridimensionamento */
@media (max-width: 767px) {
  .header-right {
    gap: 1rem;
    font-size: 1.2rem; /* icone più piccole */
  }

  .cart-count {
    font-size: 0.65rem;
    padding: 1px 4px;
    top: -3px;
    right: -4px;
  }

  /* Opzionale: nascondere la wishlist su mobile */
  .header-right .d-md-block {
    display: none !important;
  }
}
</style>
