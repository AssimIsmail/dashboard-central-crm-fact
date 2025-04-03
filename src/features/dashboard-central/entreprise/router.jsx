import { EntreprisesProvider } from "./context/entreprises/EntreprisesProvider";
import { EntreprisePage } from "./pages/EntreprisePage";

const entrepriseRoutes = [
    {
      path: "entreprises",
      element: <EntreprisesProvider />,
      children: [
        {
          path: "",
          element: <EntreprisePage />,
        }
      ]
    },
];

export default entrepriseRoutes;