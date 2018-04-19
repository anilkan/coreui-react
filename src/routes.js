import { UrunTanimlari } from "./views";
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
    name: "Ürün Tanımları",
    component: UrunTanimlari
  }
];

export default routes;
