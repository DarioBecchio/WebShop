<script>
import Searchbar from "./Searchbar.vue";
import Logo from "./Logo.vue";
export default {
  name: "Header",
  components: {
    Searchbar,
    Logo,
  },
  data() {
    return {
      menu: [
        "Make up",
        "Profumi",
        "Trattamento viso",
        "Trattamento corpo",
        "Capelli",
        "Marche",
      ],
    };
  },
};
</script>

<template>
  <header class="container-sm container-md container-xl">
    <div class="layout d-flex justify-content-between p-3">
      <Searchbar></Searchbar>
      <Logo></Logo>
      <div class="align-self-center rightside">
        <ul class="d-flex justify-content-around list-unstyled mb-0">
          <li>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-solid fa-user"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item, index) in menu" :key="index">
              <a class="nav-link" href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* opzionale: per un effetto underline elegante */
.nav-link {
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-link:hover {
  color: #e83e8c; /* rosa simile a quello di Bootstrap */
  border-bottom: 2px solid #e83e8c;
}
li {
  padding: 1rem;
}

.rightside {
  width: 30%;
  display: flex;
  justify-content: end;
}
</style>
