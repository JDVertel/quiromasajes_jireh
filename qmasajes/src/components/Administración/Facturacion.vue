<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#FC_registroA"
        type="button"
        role="tab"
        aria-controls="FC_registroA"
        aria-selected="true"
      >
        Facturar Servicio
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#FC_registrados"
        type="button"
        role="tab"
        aria-controls="FC_registrados"
        aria-selected="false"
      >
        Ver/Eliminar
      </button>
    </li>
  </ul>
  <!--  -->
  <div class="center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="input-group mt-4">
            <input
              class="form-control"
              type="text"
              id="busqueda"
              placeholder="Buscar por documento"
              name="busqueda"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              pattern="[0-9]{12,}"
              title="Ingresa al menos 12 números"
            />
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="FC_registroA"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0"
    >
    <div class="center">
        <p class="contactar mt-4">Datos Cliente</p>
      </div>
      <div class="row mt-3">
        <!-- Card con los datos del paciente -->
        <div class="card mt-2">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <p>
                  <strong>Nombre:</strong>
                  {{ datosPaciente.nombre }}
                </p>
                <p><strong>Sexo:</strong> {{ datosPaciente.sexo }}</p>
                <p>
                  <strong>Tipo de Documento:</strong>
                  {{ datosPaciente.tipoDocumento }}
                </p>
                <p>
                  <strong>Número de Documento:</strong>
                  {{ datosPaciente.numeroDocumento }}
                </p>
                <p>
                  <strong>Fecha de Nacimiento:</strong>
                  {{ datosPaciente.fechaNacimiento }}
                </p>
                <p><strong>Edad:</strong> {{ datosPaciente.edad }}</p>
              </div>
              <div class="col-6">
                <p>
                  <strong>Teléfono:</strong>
                  {{ datosPaciente.telefono }}
                </p>
                <p>
                  <strong>Correo:</strong>
                  {{ datosPaciente.correo }}
                </p>
                <p>
                  <strong>Departamento:</strong>
                  {{ datosPaciente.departamento }}
                </p>
                <p>
                  <strong>Ciudad:</strong>
                  {{ datosPaciente.ciudad }}
                </p>
                <p>
                  <strong>Dirección:</strong>
                  {{ datosPaciente.direccion }}
                </p>
                <p>
                  <strong>Detalle:</strong>
                  {{ datosPaciente.detalle }}
                </p>
              </div>
            </div>
          </div>
          <!-- Fin de la card con los datos del paciente -->
        </div>
        <div class="center">
          <p class="contactar mt-4 mb-3">Datos Factura</p>
        </div>
        <!-- Card con los datos de factura -->
        <div class="card mt-2">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <p>
                  <strong>Servicio:</strong>
                  {{ datosFactura.servicio }}
                </p>
                <p>
                  <strong>Precio Unidad:</strong>
                  $ {{ datosFactura.punidad }}
                </p>
                <p>
                  <strong>Precio Total:</strong>
                  $ {{ datosFactura.ptotal }}
                </p>
              </div>
              <div class="col-6">
                <p class="custom-p">
                  <strong>Fecha Factura:</strong>
                </p>
                <p>
                  <input
                  
                    :disabled="edicionDesactivada"
                    v-model="fecha"
                    type="text"
                    class="factura datePicker"
                  />
                </p>

                <p class="custom-p">
                  <strong>Detalle:</strong>
                </p>
                <p>
                  <input v-model="nuevaFactura.detalle" :disabled="edicionDesactivada" type="text" />
                </p>

                <p class="custom-p">
                  <strong>Cantidad:</strong>
                </p>
                <p>
                  <input
                    :disabled="edicionDesactivada"
                    v-model="cantidad"
                    type="text"
                  />
                </p>

                <p class="custom-p">
                  <strong>Medio de Pago:</strong>
                </p>
                <p class="custom-p">
                  <select
                    class="selectMpago"
                    :disabled="edicionDesactivada"
                    id="h_servicio"
                    name="h_servicio"
                    required="true"
                  >
                    <option
                      v-for="(mpagos, index) in mpagos"
                      :key="index"
                      :value="index + 1"
                    >
                      {{ mpagos }}
                    </option>
                  </select>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la card con los datos de factura -->
      </div>
      <div class="center">
        <router-link class="no-decoracion" to="/Factura">
          <button type="button" class="finalizar btn btn-custom mt-4 mb-4">
            <i id="icono-modal" class="bi bi-check2-circle"></i> Finalizar
          </button>
        </router-link>

        <button
          v-if="edicionDesactivada"
          type="button"
          class="btn btn-custom mt-4 mb-4"
          @click="activarEdicion"
        >
          <i id="icono-modal" class="bi bi-pencil"></i> Editar
        </button>

        <button
          v-else
          type="button"
          class="btn btn-custom mt-4 mb-4"
          @click=" guardarCambios"
        > <!--esto va arriba en el @click agregarFactura  -->
          <i id="icono-modal" class="bi bi-floppy-fill"></i> Guardar
        </button>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="FC_registrados"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabindex="0"
    >
      <!-- Tabla -->
      <div class="card-body mt-4">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead style="align-items: center; text-align: center">
              <tr>              
                <th>Nombre</th>
                <th>Documento</th>
                <th>Edad</th>
                <th>Télefono</th>
                <th>Correo</th>                
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="datapacientes in facturacion " :key="documento">
                <td>{{ datapacientes.nombre }}</td>
                <td>{{ datapacientes.documento }}</td>
                <td>{{ datapacientes.edad }}</td>
                <td>{{ datapacientes.telefono }}</td>
                <td>{{ datapacientes.correo }}</td>
                
                <td>
                  <div class="btnventas btn-group dropstart" role="group">
                    <button
                      type="button"
                      class="btnventas btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="material-icons">settings</i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          @click="eliminarProducto(index)"
                          ><i
                            style="margin-right: 5px"
                            class="bi bi-trash3-fill"
                          ></i
                          >Eliminar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Tabla -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  rpacientes,
  facturacion,
  datosPaciente,
  datosFactura,
  mpagos,
} from "../../bd/bd.js";

export default {
  name: "facturacion",

  data() {
    return {
      rpacientes,
      facturacion,
      datapacientes: rpacientes,
      fechaNacimiento: "",
      edad: 0,
      edicionDesactivada: false,
      datosPaciente,
      datosFactura,
      mpagos,
      fecha: ref(""),
      cantidad: 0,

      eliminarProducto: (index) => {
        rpacientes.value.splice(index, 1);
      },
      nuevaFactura: {       
        detalle: '',
      }
    };
  },

  methods: {
    calcularEdad() {
      const diferenciaTiempo =
        Date.now() - new Date(this.fechaNacimiento).getTime();

      this.edad = Math.floor(diferenciaTiempo / (365.25 * 24 * 60 * 60 * 1000));
    },


  },

  mounted() {
    this.init_date();
  },

  methods: {
    init_date() {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;

      this.fecha = `${formattedDay}-${formattedMonth}-${now
        .getFullYear()
        .toString()
        .substr(2, 2)}`;
    },
    activarEdicion() {
      this.edicionDesactivada = false;
    },

    guardarCambios() {
      this.edicionDesactivada = true;
    },
    agregarFactura (){
      if (
        this.nuevaFactura.fecha != '' &&
        this.nuevaFactura.detalle != ''
      ) {
        this.facturacion.push({ ...this.nuevaFactura});

        this.nuevaFactura = {
          fecha:'',
          detalle:'',
        };
        swal("Guardado", "succes");
      } else {
        swal("No se ha guardado", "error")
      }
    },
  },

  watch: {
    cantidad: function (nuevaCantidad) {
      if (
        this.datosFactura.punidad !== undefined &&
        this.datosFactura.ptotal !== undefined
      ) {
        this.datosFactura.ptotal = this.datosFactura.punidad * nuevaCantidad;
      }
    },
  },
};
</script>
