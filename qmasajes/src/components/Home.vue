<template>
  <!-- Logo -->
  <div
    v-for="logo in logo"
    :key="logo.id"
    style="position: relative"
    class="logotipo animate__animated animate__backInDown"
  >
    <img :src="logo.imagen" alt="Logo" />
  </div>
  <!-- Logo -->
  <div class="card card-principal">
    <div id="card-header-inicio" class="card-header">
      <ul
        class="nav nav-tabs card-header-tabs justify-content-center"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link active"
            id="item-1-1-tab"
            role="tab"
            aria-controls="item-1-1"
            aria-selected="true"
            href="#item-1-1"
            data-bs-toggle="tab"
            >Quiropraxia
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            id="item-1-2-tab"
            role="tab"
            aria-controls="item-1-2"
            aria-selected="false"
            href="#item-1-2"
            data-bs-toggle="tab"
            >Fisioterapia
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="item-1-3-tab"
            role="tab"
            aria-controls="item-1-3"
            aria-selected="false"
            href="#item-1-3"
            data-bs-toggle="tab"
            >Quiromasajes
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body animate__animated animate__fadeInLeft">
      <div id="nav-tabContent" class="tab-content">
        <div
          id="item-1-1"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="item-1-1-tab"
        >
          <!-- Cards 1 -->
          <div class="content">
            <div class="card-container">
              <div
                v-for="(servicio, index) in quiro"
                :key="index"
                class="cards-serv card"
              >
                <img :src="servicio.imagen" alt="Imagen 1" />
                <h3>{{ servicio.nombreServicio }}</h3>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="precio">
                    <span>$</span>{{ servicio.precioServicio }}
                  </p>
                  <i
                    class="comprar bi bi-question-circle-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#ejemplo"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Cards 1 -->
        </div>
        <div
          id="item-1-2"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="item-1-2-tab"
        >
          <!-- Cards 2 -->
          <div class="content">
            <div class="card-container">
              <div
                v-for="(servicio, index) in fisio"
                :key="index"
                class="cards-serv card"
              >
                <img :src="servicio.imagen" alt="Imagen 1" />
                <h3>{{ servicio.nombreServicio }}</h3>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="precio">
                    <span>$</span>{{ servicio.precioServicio }}
                  </p>
                  <i
                    class="comprar bi bi-question-circle-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#ejemplo"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Cards 2 -->
        </div>
        <div
          id="item-1-3"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="item-1-3-tab"
        >
          <!-- Cards 3 -->
          <div class="content">
            <div class="card-container">
              <div
                v-for="(servicio, index) in qsaje"
                :key="index"
                class="cards-serv card"
              >
                <img :src="servicio.imagen" alt="Imagen 1" />
                <h3>{{ servicio.nombreServicio }}</h3>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="precio">
                    <span>$</span>{{ servicio.precioServicio }}
                  </p>
                  <i
                    class="comprar bi bi-question-circle-fill"
                    data-bs-toggle="modal"
                    data-bs-target="#ejemplo"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Cards 3 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quiropraxia, fisioterapia, quiromasaje, logo } from "../bd/bd.js";

export default {
  data() {
    return {
      quiro: quiropraxia,
      fisio: fisioterapia,
      qsaje: quiromasaje,
      logo: logo,
    };
  },
};
</script>

<style>
.offcanvas-backdrop.show {
  opacity: 0;
}
</style>
