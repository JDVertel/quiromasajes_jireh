<template>
           <div
            id="ventaRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="ventaRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#PC_registroA"
                    type="button"
                    role="tab"
                    aria-controls="PC_registroA"
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
                    data-bs-target="#PC_registrados"
                    type="button"
                    role="tab"
                    aria-controls="PC_registrados"
                    aria-selected="false"
                  >
                    Ver/Eliminar
                  </button>
                </li>
              </ul>
              <!--  -->
              <div class="center">
                <div class="center"></div>
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
                  id="PC_registroA"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                 <div class="center">
                    <p class="contactar mt-4">Datos Personales</p>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_nombre"
                          ><strong>Nombre</strong></label
                        ><input
                          v-model="nuevoPaciente.nombre"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="p_nombre"
                          placeholder="Ej: Ryan Castro"
                          name="p_nombre"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_sexo"
                          ><strong>Sexo</strong></label
                        >
                        <select
                          :disabled="edicionDesactivada"
                          class="form-select"
                          id="p_sexo"
                          name="p_sexo"
                          required="true"
                        >
                          <option
                            v-for="(sexo, index) in sexo"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ sexo }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_tipoid"
                          ><strong>Tipo Documento</strong></label
                        >
                        <select
                          :disabled="edicionDesactivada"
                          class="form-select"
                          id="p_tipoid"
                          name="p_tipoid"
                          required="true"
                        >
                          <option
                            v-for="(tDocumento, index) in tDocumento"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ tDocumento }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="id_cliente"
                          ><strong>Número documento *</strong></label
                        ><input
                        v-model="nuevoPaciente.documento"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="id_cliente"
                          placeholder="Ej: 1095298209"
                          name="id_cliente"
                          oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                          pattern="[0-9]{12,}"
                          title="Ingresa al menos 12 números"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="fechaNacimiento"
                          ><strong>Fecha de Nacimiento</strong></label
                        >
                        <input
                        
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="date"
                          id="fechaNacimiento"
                          v-model="fechaNacimiento"
                          @change="calcularEdad"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="edad"
                          ><strong>Edad</strong></label
                        >
                        <input
                          disabled
                          class="form-control"
                          type="number"
                          id="edad"
                          v-model="edad"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_tel"
                          ><strong>Teléfono *</strong></label
                        ><input
                        v-model="nuevoPaciente.telefono"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="p_tel"
                          placeholder="Teléfono de contacto"
                          name="p_tel"
                          oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                          pattern="[0-9]{10,}"
                          title="Ingresa al menos 10 números"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_email"
                          ><strong>Correo *</strong></label
                        ><input
                        v-model="nuevoPaciente.correo"
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="email"
                          id="p_email"
                          placeholder="Ej: ryan@gmail.com"
                          name="p_email"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="center">
                      <p class="contactar mt-4 mb-4">Datos Recidencia</p>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_departamento"
                          ><strong>Departamento</strong></label
                        >
                        <select
                          :disabled="edicionDesactivada"
                          class="form-select"
                          id="p_departamento"
                          name="p_departamento"
                          required
                        >
                          <option
                            v-for="(departamento, index) in departamentos"
                            :key="index"
                            :value="index + 1"
                          >
                            {{ departamento }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_ciudad"
                          ><strong>Ciudad</strong></label
                        ><input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="email"
                          id="p_ciudad"
                          placeholder="Ej: Socorro"
                          name="p_ciudad"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_direccion"
                          ><strong>Dirección</strong></label
                        ><input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="email"
                          id="p_direccion"
                          placeholder="Ej: Carrea 10a"
                          name="p_direccion"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="p_detalles"
                          ><strong>Detalles</strong></label
                        ><input
                          :disabled="edicionDesactivada"
                          class="form-control"
                          type="text"
                          id="p_detalles"
                          placeholder="Ej: Tercer piso"
                          name="p_detalles"
                          required=""
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
                      @click=" agregarPaciente"
                    > <!-- esto va arriba en el @click  guardarCambios, -->
                      <i id="icono-modal" class="bi bi-floppy-fill"></i> Guardar
                    </button>
                  </div>  
                </div>
                <div
                  class="tab-pane fade"
                  id="PC_registrados"
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
                          <tr
                            v-for="(datapacientes, index) in rpacientes"
                            :key="index"
                          >
                            <td>{{ datapacientes.nombre }}</td>
                            <td>{{ datapacientes.documento }}</td>
                            <td>{{ datapacientes.edad }}</td>
                            <td>{{ datapacientes.telefono }}</td>
                            <td>{{ datapacientes.correo }}</td>
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
            </div>
          </div>
</template>

<script>


import { ref, onMounted } from "vue";
import {
  rpacientes,
  hrclinica,
  datosPaciente,
  departamentos,
  tallaUnidad,
  pesoUnidad,
  sexo,
  tDocumento,
} from "../../bd/bd.js";

export default {
    
  components: {

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
      rpacientes,
      datapacientes: rpacientes,

      hrclinica,
      datahrclinica: hrclinica,

      rpacientes,
      datarpacientes: rpacientes,

      fechaNacimiento: "",
      edad: 0,

      edicionDesactivada: false,

      departamentos,
      datosPaciente,
      tallaUnidad,
      pesoUnidad,
      sexo,
      tDocumento,
      fecha,

      eliminarProducto,
      

      nuevoPaciente: {
        nombre:'',
        documento:'',
        edad:0,
        telefono:'',
        correo:'',
      }

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

    agregarPaciente (){
        if (
        this.nuevoPaciente.nombre !='' &&
        this.nuevoPaciente.documento !='' &&
        this.nuevoPaciente.edad == 0 &&
        this.nuevoPaciente.telefono != ''&&
        this.nuevoPaciente.correo != ''
        ) {
            this.rpacientes.push({ ...this.nuevoPaciente});

            this.nuevoPaciente = {
                nombre:'',
                documento:'',
                edad:'',
                telefono:'',
                correo:'',
            };
            swal("Guardado", "seccces");
        } else {
            swal("No se ha guardado", "error");
        }
    },
  },
};
</script>