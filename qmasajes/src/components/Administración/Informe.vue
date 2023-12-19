<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#IN_registroA"
        type="button"
        role="tab"
        aria-controls="IN_registroA"
        aria-selected="true"
      >
        General
      </button>
    </li>
    <!-- <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#IN_registrados"
        type="button"
        role="tab"
        aria-controls="IN_registrados"
        aria-selected="false"
      >
        General
      </button>
    </li> -->
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="IN_registroA"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0"
    >
      <!-- Filtrar por fecha -->
      <!-- <input v-model="filtroFechaInicio" type="date" placeholder="Inicio" />
      <input v-model="filtroFechaFin" type="date" placeholder="Final" /> -->

      <div class="d-flex">
        <!-- Dropdown de Fecha -->
        <div class="btnfiltro btn-group dropdown mb-2 me-0" role="group">
          <button
            type="button"
            class="btnfiltro"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">calendar_month</i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">
                <i class="bi bi-calendar-plus"></i>
                <input
                  class="finicio"
                  v-model="filtroFechaInicio"
                  type="date"
                  placeholder="Inicio"
                />
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-calendar-x"></i>
                <input
                  class="ffinal"
                  v-model="filtroFechaFin"
                  type="date"
                  placeholder="Final"
                />
              </a>
            </li>
          </ul>
        </div>

        <!-- Dropdown de Filtro -->
        <div class="btnfiltro btn-group dropdown mb-2" role="group">
          <button
            type="button"
            class="btnfiltro"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-icons">filter_alt</i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item">
                <i class="bi bi-file-text"></i>
                <input
                  class="codigof"
                  v-model="filtroCodigoFactura"
                  type="number"
                  placeholder="Código factura"
                />
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-heart-pulse"></i>
                <input
                  class="codigos"
                  v-model="filtroCodigoServicio"
                  type="number"
                  placeholder="Código servicio"
                />
              </a>
            </li>
            <li>
              <a class="dropdown-item">
                <i class="bi bi-person-vcard"></i>
                <input
                  class="codigodc"
                  v-model="filtroDocumentoCliente"
                  type="number"
                  placeholder="Doc cliente"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Tabla -->
      <div class="card-body mt-4">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead style="align-items: center; text-align: center">
              <tr>
                <th>Fecha</th>
                <th>Código Servicio</th>
                <th>Nombre Servicio</th>
                <th>Detalle Servicio</th>
                <th>Nombre Cliente</th>
                <th>Documento Cliente</th>
                <th>Código Factura</th>
                <th>Medio Pago</th>
                <th>Total Pagado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(datainformes, index) in informesFiltrados"
                :key="index"
              >
                <td>{{ datainformes.fecha }}</td>
                <td>{{ datainformes.servicioC }}</td>
                <td>{{ datainformes.servicio }}</td>
                <td>{{ datainformes.detalle }}</td>
                <td>{{ datainformes.cliente }}</td>
                <td>{{ datainformes.documentoC }}</td>
                <td>{{ datainformes.facturaC }}</td>
                <td>{{ datainformes.medioP }}</td>
                <td>{{ datainformes.total }}</td>
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
    <!-- <div
      class="tab-pane fade"
      id="IN_registrados"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabindex="0"
    ></div> -->
  </div>
</template>

<script>
import { informes } from "../../bd/bd.js";

export default {
  name: "informe",

  data() {
    return {
      informes,
      filtroCodigoFactura: "",
      filtroCodigoServicio: "",
      filtroDocumentoCliente: "",
      filtroFechaInicio: "",
      filtroFechaFin: "",
    };
  },

  computed: {
    informesFiltrados() {
      return this.informes.filter((informe) => {
        const codigoFactura = informe.facturaC.toString();
        const codigoServicio = informe.servicioC.toString();
        const documentoCliente = informe.documentoC.toString();

        const fechaInicio =
          this.filtroFechaInicio &&
          new Date(this.filtroFechaInicio + "T00:00:00Z");
        const fechaFin =
          this.filtroFechaFin && new Date(this.filtroFechaFin + "T23:59:59Z");
        const fechaInforme = this.parseFecha(informe.fecha);

        const codigoFacturaMatch = codigoFactura.includes(
          this.filtroCodigoFactura
        );
        const codigoServicioMatch = codigoServicio.includes(
          this.filtroCodigoServicio
        );
        const documentoClienteMatch = documentoCliente.includes(
          this.filtroDocumentoCliente
        );
        const fechaMatch =
          (!fechaInicio || fechaInforme >= fechaInicio) &&
          (!fechaFin || fechaInforme <= fechaFin);

        return (
          codigoFacturaMatch &&
          codigoServicioMatch &&
          documentoClienteMatch &&
          fechaMatch
        );
      });
    },
  },

  methods: {
    eliminarProducto(index) {
      const informesFiltrados = this.informesFiltrados;
      informesFiltrados.splice(index, 1);
      this.informes = [...informesFiltrados];
    },

    parseFecha(fecha) {
      // Parsear la fecha en formato "DD-MM-YY"
      const [dia, mes, anio] = fecha.split("-");
      return new Date(`20${anio}-${mes}-${dia}T00:00:00Z`);
    },
  },
};
</script>
