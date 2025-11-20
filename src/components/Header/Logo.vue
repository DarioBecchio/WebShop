<script>
export default {
  name: "Logo",
};
</script>

<template>
  <div class="logo">
    <RouterLink to="/">
      <img
        src="/img/crocus-1279508_1280.png"
        alt=""
        class="img-fluid"
        style="max-height: 60px"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.logo {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Logo desktop */
.logo-img {
  max-height: 60px;
  width: auto;
  transition: all 0.3s ease;
}

/* Mobile: riduce il logo */
@media (max-width: 767px) {
  .logo {
    height: 50px; /* header più piccolo su mobile */
  }

  .logo-img {
    max-height: 40px; /* logo più piccolo */
  }
}
</style>
