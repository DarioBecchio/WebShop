<script>
export default {
  name: "Navbar",
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
</style>
