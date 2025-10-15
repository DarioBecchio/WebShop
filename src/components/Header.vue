<script>
export default {
  name: "Header",
};
</script>

<template>
  <header class="container-sm container-md container-xl">
    <nav class="layout d-flex justify-content-between align-self-center p-3">
      <div class="leftside input-group">
        <input type="text" class="form-control" />
      </div>

      <div class="logo">
        <img src="/img/crocus-1279508_1280.png" alt="" />
      </div>

      <div class="rightside">
        <ul class="d-flex justify-content-around">
          <li>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-solid fa-user"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
header {
  height: 20%;
}
li {
  gap: 1rem;
}

.logo {
  width: 70px;
  height: 70px;
}
img {
  height: 100%;
}
.leftside {
  width: 100px;
}
input {
  height: 40px;
}
</style>
