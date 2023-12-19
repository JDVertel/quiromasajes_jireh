<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#RG_registroA"
        type="button"
        role="tab"
        aria-controls="RG_registroA"
        aria-selected="true"
      >
        Añadir
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#RG_registrados"
        type="button"
        role="tab"
        aria-controls="RG_registrados"
        aria-selected="false"
      >
        Ver/Eliminar
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="RG_registroA"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0"
    >
      <div class="row mt-3">
        <div class="center">
          <p class="contactar mt-4 mb-3">Registrar Servicios</p>
        </div>
        <div class="col-6">
          <div class="mt-3">
            <label class="form-label" ffor="codigoSr"
              ><strong>Código Producto</strong></label
            >
            <input
              v-model="nuevoRegistro.codigoSr"
              class="form-control"
              type="number"
              id="codigoSr"
              name="codigoSr"
              placeholder="Ej: 502"
              required
            />
          </div>
        </div>

        <div class="col-6">
          <div class="mb-3 mt-3">
            <label class="form-label" for="tipoSr"
              ><strong>Tipo Servicio</strong></label
            >
            <select
              v-model="nuevoRegistro.tipoSr"
              class="form-select"
              id="tipoSr"
              name="tipoSr"
              required="true"
            >
              <option
                v-for="(servicios, index) in servicios"
                :key="index"
                :value="index +1"
              >
                {{ servicios }}
              </option>
            </select>
          </div>
        </div>

        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="nombreSr"
              ><strong>Nombre</strong></label
            >
            <input
              v-model="nuevoRegistro.nombreSr"
              class="form-control"
              type="text"
              id="nombreSr"
              name="nombreSr"
              placeholder="Del servicio"
              required
            />
          </div>
        </div>

        <div class="col-6">
          <div class="mb-0">
            <label class="form-label" for="detalleSr"
              ><strong>Detalle</strong></label
            >
            <input
              v-model="nuevoRegistro.detalleSr"
              class="form-control"
              type="text"
              id="detalleSr"
              name="detalleSr"
              maxlength="30"
              required
            />
            <small class="form-text text-muted">(Máximo 30 caracteres).</small>
          </div>
        </div>

        <div class="col-6">
          <div class="mb-3">
            <label class="form-label" for="valorSr"
              ><strong>Valor</strong></label
            >
            <input
              v-model="nuevoRegistro.valorSr"
              class="form-control"
              type="number"
              id="valorSr"
              name="valorSr"
              placeholder="0"
              required
            />
          </div>
        </div>

        <!--  -->
        <div class="col-15">
          <div class="mb-3">
            <strong class="tiImg">Imágenes</strong>
            <p class="ifocarga">
              {{ imagesSelected }} imágenes seleccionadas (Máximo 4)
            </p>
            <div class="logo">
              <p class="logop">
                <i class="bi bi-box-arrow-up"></i>
              </p>
              <br />
              <input
                class="foto"
                :required="imagesSelected !== 4"
                type="file"
                ref="fileInput"
                accept="image/*"
                multiple
                @change="handleFileUpload"
              />
            </div>
            <div style="display: flex" class="d-flex flex-wrap gap-1">
              <div
                v-for="(image, index) in uploadedImages"
                :key="index"
                class="image-preview"
              >
                <img
                  class="fixed-size-image"
                  :src="image.src"
                  :alt="image.alt"
                />
              </div>
              <i
                class="eliminar-img bi bi-trash3"
                @click="clearImages"
                v-if="uploadedImages.length > 0"
              ></i>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="center">
        <button
          @click="guardarRegistro"
          type="button"
          class="btn btn-custom mt-4 mb-4"
        >
          <i id="icono-modal" class="bi bi-floppy-fill"></i> Guardar
        </button>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="RG_registrados"
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
                <th>Código Producto</th>
                <th>Tipo Servicio</th>
                <th>Nombre</th>
                <th>Detalle</th>
                <th>Valor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(datasanadirSr, index) in añadirSr" :key="index">
                <td>{{ datasanadirSr.codigoSr }}</td>
                <td>{{ datasanadirSr.tipoSr }}</td>
                <td>{{ datasanadirSr.nombreSr }}</td>
                <td>{{ datasanadirSr.detalleSr }}</td>
                <td>{{ datasanadirSr.valorSr }}</td>
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
import { servicios, añadirSr } from "../../bd/bd.js";

export default {
  name: "añadirS",

  methods: {
    guardarRegistro() {
      // Validar si todos los campos requeridos están llenos
      if (
        this.nuevoRegistro.codigoSr !== null &&
        this.nuevoRegistro.tipoSr !== "" &&
        this.nuevoRegistro.nombreSr !== "" &&
        this.nuevoRegistro.detalleSr !== "" &&
        this.nuevoRegistro.valorSr !== null
      ) {
        // Añadir el nuevo registro a la base de datos local
        this.añadirSr.push({ ...this.nuevoRegistro });

        // Limpiar el formulario después de añadir el registro
        this.nuevoRegistro = {
          codigoSr: null,
          tipoSr: "",
          nombreSr: "",
          detalleSr: "",
          valorSr: null,
        };
        swal("Registrado", "El registro ha sido correcto", "success");
      } else {
        swal("Oops", "Debes completar todos los campos", "error");
      }
    },
  },

  data() {
    const uploadedImages = ref([]); // Almacenar las imágenes cargadas
    let imagesSelected = ref(0); // Contador de imágenes seleccionadas

    const handleFileUpload = (event) => {
      if (imagesSelected.value >= 4) {
        // Límite de 4 imágenes alcanzado, no permitir más
        return;
      }

      const fileInput = event.target;
      const files = fileInput.files;

      // Recorrer los archivos seleccionados
      for (let i = 0; i < files.length; i++) {
        if (imagesSelected.value >= 4) {
          // Límite de 4 imágenes alcanzado, no permitir más
          break;
        }

        const file = files[i];
        const imageURL = URL.createObjectURL(file);

        uploadedImages.value.push({ src: imageURL, alt: "Imagen" });
        imagesSelected.value++;
      }

      // Limpiar el campo de entrada de archivos si es necesario
      fileInput.value = "";
    };

    const clearImages = () => {
      // Restablecer el array de imágenes cargadas y el contador
      uploadedImages.value = [];
      imagesSelected.value = 0;
    };

    return {
      servicios,
      edicionDesactivada: true,

      añadirSr,
      datasanadirSr: añadirSr,

      uploadedImages,
      imagesSelected,
      handleFileUpload,
      clearImages,

      eliminarProducto: (index) => {
        añadirSr.value.splice(index, 1);
      },

      nuevoRegistro: {
        codigoSr: null,
        tipoSr: "",
        nombreSr: "",
        detalleSr: "",
        valorSr: null,
      },
    };
  },
};
</script>
