import { EntrepriseProvider } from "./context/entreprise/EntrepriseProvider";
import { EntreprisesProvider } from "./context/entreprises/EntreprisesProvider";
import { CreateEntreprisePage } from "./pages/CreateEntreprisePage";
import { EntreprisePage } from "./pages/EntreprisePage";
import { UpdateEntreprisePage } from "./pages/UpdateEntreprisePage";

const entrepriseRoutes = [
  {
    path: "entreprises",
    element: <EntreprisesProvider />,
    children: [
      {
        path: "",
        element: <EntreprisePage />,
      },
      {
        path: "create",
        element: <CreateEntreprisePage />,
      },
      {
        path: ":entreprise_id",
        element: <EntrepriseProvider />,
        children: [
          {
            path: "update",
            element: <UpdateEntreprisePage />,
          },
        ],
      },
    ],
  },
];

export default entrepriseRoutes;
