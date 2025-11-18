<script>
export default {
  name: "HeaderRight",
};
</script>

<template>
  <div class="header-right d-flex align-items-center gap-3">
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
.rightside {
  width: 30%;
  display: flex;
  justify-content: end;
}
.header-right .icon {
  font-size: 1.2rem;
  color: #333;
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -6px;
  background: red;
  color: #fff;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 2px 6px;
}
</style>
