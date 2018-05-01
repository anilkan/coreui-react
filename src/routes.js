import { UrunTanimlari, UrunTanimlariForm } from "./views";
import Full from "./containers/Full";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home", component: Full },
  {
    path: "/urun-yonetimi",
    exact: true,
    name: "Ürün Yönetimi",
    component: UrunTanimlari
  },
  {
    path: "/urun-yonetimi/urun-tanimlari",
    exact: true,
    name: "Ürün Tanımları",
    component: UrunTanimlari
  },
  {
    path: "/urun-yonetimi/urun-tanimlari/form",
    name: "Ürün Tanımları Form",
    component: UrunTanimlariForm
  }
];

export default routes;
