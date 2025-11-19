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
  <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm">
    <div class="container">
      <!-- Menù a comparsa -->
      <div
        class="collapse navbar-collapse justify-content-center container-fluid"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in menu" :key="index">
            <Router-link
              class="nav-link"
              :to="{ name: 'Category', params: { category: item } }"
              >{{ item }}
            </Router-link>
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
