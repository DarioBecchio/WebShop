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

@media (max-width: 768px) {
  /* Contenitore nav scrollabile */

  .nav-link {
    padding: 0.2rem 0.4rem !important;
    font-size: 0.75rem !important;
    white-space: nowrap;
  }

  .navbar {
    padding-top: 0.1rem !important;
    padding-bottom: 0.1rem !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .navbar {
    padding-top: 0.2rem !important;
    padding-bottom: 0.2rem !important;
  }

  .navbar-nav {
    flex-wrap: nowrap !important; /* tutto su una singola riga */
  }

  .nav-link {
    font-size: 0.8rem !important; /* riduce ingombro */
    padding: 0.2rem 0.5rem !important;
    white-space: nowrap; /* evita l’andare a capo */
  }

  /* Se hai <li> con padding, riducilo */
  .navbar-nav li {
    padding: 0.5rem !important;
  }
}
</style>
