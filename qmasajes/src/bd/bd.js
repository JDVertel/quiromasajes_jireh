import { ref } from "vue";

export const logo = [
  {
    imagen: "https://i.ibb.co/NLqWkps/QlOGO.png",
  },
];

export const usuarios = [
  {
    nombre: "Ryan",
    email: "sog@gmail.com",
    password: "sog",
  },
];

// Tablas
export const rpacientes = ref([
  {
    nombre: "Ryan",
    documento: 1095298209,
    edad: 18,
    telefono: 3222431440,
    correo: "ryan@gmail.com",
  },

  {
    nombre: "Luis",
    documento: 1090,
    edad: 18,
    telefono: 1098765432,
    correo: "lius@gmail.com",
  },
]);

export const facturacion = ref([
  {
    nombre: "Ryan1",
    documento: 1095298209,
    edad: 18,
    telefono: 3222431440,
    correo: "ryan@gmail.com",
    servicio: "quiromasaje",
    total: 40000,
    fecha: 23092323,
    detalle:"dolor en pierna",
  },


]);


export const hrclinica = ref([
  {
    fechaHR: "Ryan",
    documentoHR: 1095298209,
    servicioHR: "Quiromasaje",
    detalleHR: "Detalle1",
  },

  {
    fechaHR: "Camilo",
    documentoHR: 1021,
    servicioHR: "Quiromasaje",
    detalleHR: "Detalle2",
  },
]);

export const informes = ref([
  {
    fecha: "05-12-23",
    servicioC: 502,
    servicio: "Fisioterapia",
    detalle: "Hombro",
    cliente: "Ryan",
    documentoC: 1095298209,
    facturaC: 272363,
    medioP: "Efectivo",
    total: 20000,
  },

  {
    fecha: "05-12-23",
    servicioC: 502,
    servicio: "Fisioterapia",
    detalle: "Hombro",
    cliente: "Ryan",
    documentoC: 1095298209,
    facturaC: 272363,
    medioP: "Efectivo",
    total: 20000,
  },
]);

export const añadirSr = ref([
  {
    codigoSr: 502,
    tipoSr: "Quiromasaje",
    nombreSr: "Rectificar Columna",
    detalleSr: "Detalles",
    valorSr: 20000,
  },

  {
    codigoSr: 502,
    tipoSr: "Quiromasaje",
    nombreSr: "Rectificar Columna",
    detalleSr: "Detalles",
    valorSr: 20000,
  },
]);
// Tablas


// Datos modal

export const datosPaciente = 
  {

  nombre: "Nombre del Paciente",
  sexo: "Masculino",
  tipoDocumento: "C.C",
  numeroDocumento: 1234567890,
  fechaNacimiento: "01/01/1990",
  edad: 32,
  telefono: 1234567890,
  correo: "paciente@email.com",
  departamento: "Santander",
  ciudad: "B/manga",
  direccion: "Calle 123",
  detalle: "Apartamento 456"};

export const datosFactura = {
  servicio: "Nombre del Servicio",
  punidad: 20000,
  ptotal: 0,
};

export const departamentos = [
  "Amazonas",
  "Antioquia",
  "Arauca",
  "Atlántico",
  "Bolívar",
  "Boyacá",
  "Caldas",
  "Caquetá",
  "Casanare",
  "Cauca",
  "Cesar",
  "Chocó",
  "Córdoba",
  "Cundinamarca",
  "Guainía",
  "Guaviare",
  "Huila",
  "La Guajira",
  "Magdalena",
  "Meta",
  "Nariño",
  "Norte de Santander",
  "Putumayo",
  "Quindío",
  "Risaralda",
  "San Andrés y Providencia",
  "Santander",
  "Sucre",
  "Tolima",
  "Valle del Cauca",
  "Vaupés",
  "Vichada",
];

// Servicios (Quiropraxia)
export const quiropraxia = [
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 1",
    precioServicio: 100,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 2",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 3",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 4",
    precioServicio: 150,
  },
];
// Servicios (Quiropraxia)

// Servicios (Fisioterapia)
export const fisioterapia = [
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 5",
    precioServicio: 100,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 6",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 7",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 8",
    precioServicio: 150,
  },
];
// Servicios (Fisioterapia)

// Servicios (Quiromasajes)
export const quiromasaje = [
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 9",
    precioServicio: 100,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 10",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 11",
    precioServicio: 150,
  },
  {
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    nombreServicio: "Servicio 12",
    precioServicio: 150,
  },
];
// Servicios (Quiromasajes)

// Datos modal

export const masajes = [
  {
    id: 1,
    nombre: "Masaje terapéutico de espalda",
    imagen: "https://i.ibb.co/K0CDJ2m/masaje-relajante-espalda.jpg",
    precio: "$15.000",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

export const servicios = ["Quiropraxia", "Fisioterapia", "Quiromasaje"];

export const tallaUnidad = ["Metro", "Centimetro"];

export const pesoUnidad = ["Gramo", "Kilogramo"];

export const mpagos = ["Efectivo", "Nequi", "Daviplata"];

export const sexo = ["Masculino", "Femenino"];

export const tDocumento = ["C.C", "C.E", "T.U"];
