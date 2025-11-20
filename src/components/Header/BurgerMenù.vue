<script>
export default {
  name: "BurgerMenù",
  data() {
    return {
      isOpen: false,
      searchQuery: "",
      categories: [
        "Make up",
        "Profumi",
        "Trattamento viso",
        "Trattamento corpo",
        "Capelli",
        "Marche",
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen; // apre/chiude il menu
    },
  },
};
</script>

<template>
  <div class="burger-menu-wrapper">
    <!-- Bottone burger -->
    <button
      class="navbar-toggler d-block d-md-none"
      type="button"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Menu a tendina mobile -->
    <transition name="slide-down">
      <div v-if="isOpen" class="mobile-menu bg-light p-3 shadow-sm">
        <!-- Barra di ricerca mobile -->
        <input
          v-model="searchQuery"
          type="text"
          class="form-control mb-3"
          placeholder="Cerca..."
        />

        <!-- Elenco categorie mobile -->
        <ul class="list-group">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="list-group-item"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.burger-menu-wrapper {
  position: relative; /* menu relativo all'header */
}

/* Menu mobile “via di mezzo” */
.mobile-menu {
  position: absolute;
  top: 60px; /* subito sotto il wrapper/bottone */
  left: 0;
  max-height: 70vh; /* limita altezza, scrollabile se serve */
  overflow-y: auto;
  z-index: 1050;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

/* Animazione slide-down */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
