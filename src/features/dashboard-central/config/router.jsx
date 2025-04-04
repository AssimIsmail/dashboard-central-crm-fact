import Layout from "../core/layouts/Layout";
import entrepriseRoutes from "../entreprise/router";
import utilisateurRoutes from "../utilisateur/router";


const centralRoutes = [
    {
      path: "central",
      element: <Layout />,
      children: [...entrepriseRoutes ,...utilisateurRoutes],
    },
  ];
  export default centralRoutes;