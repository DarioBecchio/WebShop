<script>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

export default {
  name: "Account",
  setup() {
    const auth = useAuthStore();

    const showRegister = ref(false);
    const showLogin = ref(false);

    const registerForm = ref({ name: "", email: "", password: "" });
    const loginForm = ref({ email: "", password: "" });

    const registerUser = () => {
      auth.register(registerForm.value);
      showRegister.value = false;
    };

    const loginUser = () => {
      auth.login(loginForm.value);
      showLogin.value = false;
    };

    const goToRegister = () => {
      showRegister.value = true;
    };

    const goToLogin = () => {
      showLogin.value = true;
    };

    return {
      showRegister,
      showLogin,
      registerForm,
      loginForm,
      registerUser,
      loginUser,
      goToLogin,
      goToRegister,
    };
  },
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

    <!-- MODALE REGISTRAZIONE -->
    <div class="modal fade show d-block" v-if="showRegister">
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title">Registrati</h5>
            <button class="btn-close" @click="showRegister = false"></button>
          </div>

          <div class="modal-body">
            <input
              v-model="registerForm.name"
              type="text"
              class="form-control mb-2"
              placeholder="Nome"
            />
            <input
              v-model="registerForm.email"
              type="email"
              class="form-control mb-2"
              placeholder="Email"
            />
            <input
              v-model="registerForm.password"
              type="password"
              class="form-control mb-2"
              placeholder="Password"
            />
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="showRegister = false">
              Chiudi
            </button>
            <button class="btn btn-primary" @click="registerUser">
              Crea account
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODALE LOGIN -->
    <div class="modal fade show d-block" v-if="showLogin">
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title">Accedi</h5>
            <button class="btn-close" @click="showLogin = false"></button>
          </div>

          <div class="modal-body">
            <input
              v-model="loginForm.email"
              type="email"
              class="form-control mb-2"
              placeholder="Email"
            />
            <input
              v-model="loginForm.password"
              type="password"
              class="form-control mb-2"
              placeholder="Password"
            />
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="showLogin = false">
              Chiudi
            </button>
            <button class="btn btn-primary" @click="loginUser">Accedi</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.modal {
  background: rgba(0, 0, 0, 0.6);
}
.modal-dialog {
  margin-top: 10vh;
}
</style>
