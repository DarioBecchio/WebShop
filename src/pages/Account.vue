<script>
export default {
  name: "Account",
};
</script>

<template>
  <main
    class="account-page d-flex flex-column align-items-center justify-content-center py-5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5 text-center">
          <!-- Titolo -->
          <h1 class="fw-bold mb-4">Benvenuto su MyShop</h1>
          <p class="mb-4">
            Accedi al tuo account o crea un nuovo account per iniziare a fare
            shopping.
          </p>

          <!-- Pulsanti Iscriviti / Login -->
          <div class="d-grid gap-3 mb-4">
            <button class="btn btn-primary btn-lg" @click="goToRegister">
              Iscriviti
            </button>
            <button class="btn btn-outline-primary btn-lg" @click="goToLogin">
              Login
            </button>
          </div>

          <!-- Eventuale link social login -->
          <p class="text-muted">Oppure accedi con:</p>
          <div class="d-flex justify-content-center gap-3 mt-2">
            <button class="btn btn-outline-dark btn-sm">Google</button>
            <button class="btn btn-outline-dark btn-sm">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
