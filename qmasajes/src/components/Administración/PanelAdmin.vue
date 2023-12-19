<template>
  <nav class="navbar bg-custom-color">
    <div
      class="container-nav d-flex justify-content-between align-items-center"
    >
      <router-link class="no-decoracion" to="/">
        <button class="bsalida"><i class="bi bi-box-arrow-in-left"></i></button
      ></router-link>
    </div>
  </nav>

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

  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Administrar</h5></div>

      <div
        class="accordion animate__animated animate__fadeInLeft"
        id="miAcordeon"
      >
        <!-- Acordeón para ventas -->

        <div class="accordion-item">
          <h2  class="accordion-header" id="ventaRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ventaRegistroCollapse"
              aria-expanded="true"
              aria-controls="ventaRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-person-fill"></i>
              Paciente
            </button>
          </h2>
          <Paciente/>
        </div>

        <!-- Acordeón para historia clinica-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="gastosRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#gastosRegistroCollapse"
              aria-expanded="false"
              aria-controls="gastosRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-person-vcard"></i>
              Historia Clinica
            </button>
            
          </h2>
        <div><HistoriaClinica/></div>
        </div>

        <!-- Acordeón para facturación -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="clientesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#clientesRegistroCollapse"
              aria-expanded="false"
              aria-controls="clientesRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-tags-fill"></i>
              Facturación
            </button>
          </h2>
          <div
            id="clientesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="clientesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body"><facturacion /></div>
          </div>
        </div>

        <!-- Acordeón para informes  -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="InventarioRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InventarioRegistroCollapse"
              aria-expanded="false"
              aria-controls="InventarioRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-bar-chart-fill"></i>
              Informes
            </button>
          </h2>
          <div
            id="InventarioRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InventarioRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body"><informe /></div>
          </div>
        </div>

        <!-- Acordeón para servicios -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="InfomesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InfomesRegistroCollapse"
              aria-expanded="false"
              aria-controls="InfomesRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-heart-pulse-fill"></i>
              Servicios
            </button>
          </h2>
          <div
            id="InfomesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InfomesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body"><añadirS /></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import facturacion from "./Facturacion.vue";
import informe from "./Informe.vue";
import añadirS from "./AñadirServicios.vue";
import Paciente from "./Paciente.vue"; 
import HistoriaClinica from "./HistoriaClinica.vue";
import { ref, onMounted } from "vue";
import {
  rpacientes,
  hrclinica,
  datosPaciente,
  departamentos,
  servicios,
  tallaUnidad,
  pesoUnidad,
  sexo,
  tDocumento,
  logo,
} from "../../bd/bd.js";

export default {
  components: {
    Paciente,
    HistoriaClinica,
    facturacion,
    informe,
    añadirS,
  },

  data() {
    const eliminarProducto = (index) => {
      rpacientes.value.splice(index, 1);
    };

    const fecha = ref("");

    onMounted(() => {
      init_date();
    });

    function init_date() {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;

      fecha.value = `${formattedDay}-${formattedMonth}-${now
        .getFullYear()
        .toString()
        .substr(2, 2)}`;
    }

    return {

      Paciente,

      rpacientes,
      datapacientes: rpacientes,

      hrclinica,
      datahrclinica: hrclinica,

      fechaNacimiento: "",
      edad: 0,

      edicionDesactivada: true,

      departamentos,
      datosPaciente,
      servicios,
      tallaUnidad,
      pesoUnidad,
      sexo,
      tDocumento,
      fecha,
      logo:logo,

      eliminarProducto,
    };
  },
  methods: {
    calcularEdad() {
      const diferenciaTiempo =
        Date.now() - new Date(this.fechaNacimiento).getTime();

      this.edad = Math.floor(diferenciaTiempo / (365.25 * 24 * 60 * 60 * 1000));
    },
    activarEdicion() {
      this.edicionDesactivada = false;
    },

    guardarCambios() {
      this.edicionDesactivada = true;
    },
  },
};
</script>

<style></style>
