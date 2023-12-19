<template>
    
              <div
            id="gastosRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="gastosRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#HC_registroA"
                    type="button"
                    role="tab"
                    aria-controls="HC_registroA"
                    aria-selected="true"
                  >
                    Registrar/Editar
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#HC_registrados"
                    type="button"
                    role="tab"
                    aria-controls="HC_registrados"
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
                        <button class="input-group-text">
                          <i class="bi bi-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="HC_registroA"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                <div class="center">
                    <p class="contactar mt-4">Datos Personales</p>
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
                            <p>
                              <strong>Sexo:</strong> {{ datosPaciente.sexo }}
                            </p>
                            <p>
                              <strong>Tipo de Documento:</strong>
                              {{ datosPaciente.tipoDocumento }}
                            </p>
                            <p >
                              <strong >Número de Documento:</strong>
                              
                              {{ datosPaciente.numeroDocumento }}
                            </p>
                            <p>
                              <strong>Fecha de Nacimiento:</strong>
                              {{ datosPaciente.fechaNacimiento }}
                            </p>
                            <p>
                              <strong>Edad:</strong> {{ datosPaciente.edad }}
                            </p>
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
                      <p class="contactar mt-4 mb-4">Datos Consulta</p>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="fechaConsulta"
                          ><strong>Fecha Consulta</strong></label
                        >
                        <input
                        v-model="fecha"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="fechaConsulta"
                          
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="h_servicio"
                          ><strong>Servicio</strong></label
                        >
                        <select
                        v-model="nuevaHistoria.servicioHR"
                          :disabled="edicionDesactivada"
                          class="form-select"
                          id="h_servicio"
                          name="h_servicio"
                          required="true"
                        >
                          <option
                            v-for="servicio in servicios"                         
                          >
                            {{ servicio }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="Detalle"
                          ><strong>Detalle</strong></label
                        >
                        <input
                      v-model="nuevaHistoria.detalleHR"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="Detalle"
                          maxlength="30"
                          required
                        />
                        <small class="form-text text-muted"
                          >(Máximo 30 caracteres).</small
                        >
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="opciones"
                          ><strong>Riesgo Cardiovascular</strong></label
                        >
                        <select
                          class="form-select"
                          id="opciones"
                          :disabled="edicionDesactivada"
                          required
                        >
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="Talla"
                          placeholder="Talla"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <select
                          :disabled="edicionDesactivada"
                          class="form-select"
                          
                          id="Unidad"
                          placeholder="Riesgo Cardiovascular"
                          required
                        >
                          <option disabled selected>Unidad</option>
                          <option
                            v-for="(tallaUnidad, index) in tallaUnidad"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ tallaUnidad }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="Peso"
                          placeholder="Peso"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <select
                          :disabled="edicionDesactivada"
                          class="form-select"
                          
                          id="RSfCardiovascular"
                          placeholder="Riesgo Cardiovascular"
                          required
                        >
                          <option disabled selected>Unidad</option>
                          <option
                            v-for="(pesoUnidad, index) in pesoUnidad"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ pesoUnidad }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="PRArterial"
                          placeholder="Presión Arterial"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="fechaConsulta"
                          placeholder="Pulso"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="FR"
                          placeholder="Frecuencia Respiratoria"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="number"
                          id="Temperatura"
                          placeholder="Temperatura Corporal"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="center">
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
                      @click="crearHistoriaClinica"
                      
                    ><!-- esto debe ir arriba en el @click guardarCambios -->
                      <i id="icono-modal" class="bi bi-floppy-fill"></i> Guardar
                    </button>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="HC_registrados"
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
                            <th>Fecha</th>
                            <th>Documento Cliente</th>
                            <th>Servicio</th>
                            <th>Detalle</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(datahrclinica) in hrclinica"
                            :key="index"
                          >
                            <td>{{ datahrclinica.fechaHR }}</td>
                            <td>{{ datahrclinica.documentoHR }}</td>
                            <td>{{ datahrclinica.servicioHR }}</td>
                            <td>{{ datahrclinica.detalleHR }}</td>
                            <td>
                              <div
                                class="btnventas btn-group dropstart"
                                role="group"
                              >
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
            </div>
          </div>
</template>


<script>


import Paciente from "./Paciente.vue"; 
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
  },

  data() {
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

      edicionDesactivada: false,

      departamentos,
      datosPaciente,
      servicios,
      tallaUnidad,
      pesoUnidad,
      sexo,
      tDocumento,
      fecha,
      logo:logo,

      nuevaHistoria: {
        fechaHR:fecha,
        documentoHR:'a',
        servicioHR:'',
        detalleHR:'',
      }

    
    };
  },
  methods: {

    crearHistoriaClinica (){
      if (
      this.nuevaHistoria.fechaHR != '' &&
      this.nuevaHistoria.documentoHR != ''&&
      this.nuevaHistoria.servicioHR != ''&&
      this.nuevaHistoria.detalleHR != ''
      ) {
        this.datahrclinica.push({ ...this.nuevaHistoria});

        this.nuevaHistoria = {
          fecha:'',
          documentoHR:'',
          servicios:'',
          detalleHR:'',
        };
        swal("Guardada", "succes");

      } else {
        swal("No se ha guardado","error");

      }
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