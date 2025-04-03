import Layout from "../core/layouts/Layout";
import entrepriseRoutes from "../entreprise/router";


const centralRoutes = [
    {
      path: "central",
      element: <Layout />,
      children: [...entrepriseRoutes],
    },
  ];
  export default centralRoutes;