<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row text-center text-md-start">
        <!-- Colonna 1 -->
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <h5>Chi siamo</h5>
          <p>Informazioni sull'azienda o il sito.</p>
        </div>

        <!-- Colonna 2 -->
        <div class="col-12 col-md-4 mb-4 mb-md-0">
          <h5>Link utili</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-white text-decoration-none">Home</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Servizi</a>
            </li>
            <li>
              <a href="#" class="text-white text-decoration-none">Contatti</a>
            </li>
          </ul>
        </div>

        <!-- Colonna 3 -->
        <div class="col-12 col-md-4">
          <h5>Social</h5>
          <a href="#" class="text-white me-3">Facebook</a>
          <a href="#" class="text-white me-3">Instagram</a>
          <a href="#" class="text-white">Twitter</a>
        </div>
      </div>

      <hr class="bg-light my-4" />
      <div class="text-center">
        <small>&copy; 2025 Il Mio Sito. Tutti i diritti riservati.</small>
      </div>
    </div>
  </footer>
</template>

<style></style>
