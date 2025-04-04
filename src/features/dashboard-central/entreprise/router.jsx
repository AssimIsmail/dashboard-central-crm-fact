import { EntreprisesProvider } from "./context/entreprises/EntreprisesProvider";
import { CreateEntreprisePage } from "./pages/CreateEntreprisePage";
import { EntreprisePage } from "./pages/EntreprisePage";

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
        }
      ]
    },
];

export default entrepriseRoutes;