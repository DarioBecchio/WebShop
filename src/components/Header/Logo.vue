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
  width: 40%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 100%;
}
</style>
