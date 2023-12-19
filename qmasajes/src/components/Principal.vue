<template>
  <nav class="navbar bg-custom-color">
    <div
      class="container-nav d-flex justify-content-between align-items-center"
    >
      <button
        class="toggle-btn"
        data-bs-target="#offcanvas-menu"
        data-bs-toggle="offcanvas"
      >
        &#9776;
      </button>
    </div>
  </nav>

  <!-- Sidebar izquierda (Menu) -->
  <div
    class="offcanvas offcanvas-start bg-custom"
    tabindex="-1"
    data-bs-backdrop="false"
    id="offcanvas-menu"
  >
    <div class="offcanvas-header">
      <a
        class="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
        href="/"
        ><span class="titulos-sidebar fs-2"
          >Menu <i class="bi bi-filter-square"></i> </span></a
      ><button
        class="close-sedebar bi bi-x"
        type="button"
        aria-label="Close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
      <div>
        <hr class="custom-hr mt-0" />
        <ul class="nav nav-pills flex-column mb-auto">
          <strong class="separador-sidebar-uno">Navegación</strong>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <a class="nav-link" href="#"
              ><i class="bi bi-house"></i>
              <strong>Home</strong>
            </a>
          </li>
          <strong class="separador-sidebar">Nuestas redes</strong>
          <li class="nav-item">
            <a class="nav-link" href=""
              ><i class="bi bi-facebook"></i> <strong>Facebook</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""
              ><i class="bi bi-instagram"></i> <strong>Instagram</strong>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""
              ><i class="bi bi-whatsapp"></i> <strong>WhatsApp</strong>
            </a>
          </li>
          <strong class="separador-sidebar">Ingresar</strong>
          <li class="nav-item" data-bs-dismiss="offcanvas">
            <a
              class="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#login"
              href="#"
              ><i class="bi bi-person-add"></i> <strong>Iniciar sesión</strong>
            </a>
          </li>
          <!-- <router-link class="no-decoracion" to="/PanelAdmin">
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <a class="nav-link" href="#"
                ><i class="bi bi-gear-wide-connected"></i>
                <strong>Panel Admin</strong>
              </a>
            </li>
          </router-link> -->
        </ul>
      </div>
    </div>
  </div>
  <!-- Sidebar izquierda (Menu) -->

  <!-- Login -->
  <div
    class="modal fade modal-small modal-transparent"
    id="login"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <section class="position-relative py-1 py-xl-1">
            <div class="container">
              <div class="d-flex justify-content-center align-items-center">
                <div class="card mb-5">
                  <div class="card-body d-flex flex-column align-items-center">
                    <center>
                      <a
                        class="link-body-emphasis-login d-flex align-items-center me-md-auto mb-0 mb-md-0 text-decoration-none"
                        ><span class="titulos-sidebar fs-2"
                          >Jireh Quiromasaje
                          <h6 class="lema-sidebar">
                            Su bienestar es nuestra prioridad
                          </h6></span
                        ></a
                      >
                      <hr class="mb-1" />
                    </center>
                    <br />
                    <form class="text-center" method="post">
                      <div class="mb-3">
                        <input
                          v-model="email"
                          class="login form-control"
                          type="email"
                          name="email"
                          placeholder="Tu correo"
                          required
                        />
                      </div>
                      <div class="mb-3 position-relative">
                        <input
                          v-model="password"
                          class="login form-control pr-5"
                          :type="showPassword ? 'text' : 'password'"
                          name="password"
                          placeholder="Contraseña"
                          required
                          minlength="8"
                          maxlength="10"
                        />
                        <span
                          @click="togglePasswordVisibility"
                          class="toggle-password"
                        >
                          <i
                            class="bi"
                            :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
                          ></i>
                        </span>
                      </div>
                      <div class="mb-3">
                        <button
                          @click.prevent="iniciarSesion"
                          class="btn btn-custom w-100"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Iniciar sesión
                          <i
                            id="icono-form-b"
                            class="material-icons align-middle"
                            >login</i
                          >
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Login -->

  <!-- Modal presentación de producto -->
  <div
    class="modal fade modal-small"
    id="ejemplo"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close-modal bi bi-x ms-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div>
          <div
            v-for="masaje in masajes"
            :key="masaje.id"
            class="card-body d-flex flex-column"
          >
            <div class="card-imagen-modal mb-3">
              <img :src="masaje.imagen" alt="" />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title-modal">{{ masaje.nombre }}</h5>
              <p class="precio-modal">{{ masaje.precio }}</p>
            </div>
            <p class="card-text-modal">{{ masaje.descripcion }}</p>
            <div class="center"><p class="contactar">Contactar por</p></div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-custom">
                <i id="icono-modal" class="bi bi-whatsapp"></i> WhatsApp
              </button>
              <button type="button" class="btn btn-custom">
                <i id="icono-modal" class="bi bi-envelope-at"></i> Correo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal presentación de producto -->
  <router-view></router-view>
</template>

<script>
import { masajes, usuarios } from "../bd/bd.js";

export default {

  name: 'Paciente',

  data() {
    return {
      usuarios,
      masajes: masajes,
      showPassword: false,
      email: "",
      password: "",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async iniciarSesion() {
      try {
        const usuario = this.usuarios.find((usuario) => {
          return (
            usuario.email === this.email && usuario.password === this.password
          );
        });

        if (usuario) {
          swal("Realizado", "Bienvenido", "success");
          this.$router.push("/PanelAdmin");
        } else {
          const usuarioEmail = this.usuarios.find((usuario) => {
            return usuario.email === this.email;
          });

          if (usuarioEmail) {
            swal("Opps", "La contraseña es incorrecta", "error");
          } else {
            swal("Opps", "El correo electrónico no existe", "error");
          }
        }
      } catch (error) {
        console.error(error);
        swal("Error: " + error.message);
      }
    },
  },
};
</script>
