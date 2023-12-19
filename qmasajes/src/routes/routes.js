import Principal from "../components/Principal.vue";
import Home from "../components/Home.vue";
import PanelAdmin from "../components/Administración/PanelAdmin.vue";
import Factura from "../components/Administración/Factura.vue";

export const routes = [
  {
    path: "/Factura",
    component: Factura,
  },

  {
    path: "/PanelAdmin",
    component: PanelAdmin,
  },

  {
    path: "/Principal",
    component: Principal,
    children: [
      { path: "/", component: Home },
    ],
  },
];
