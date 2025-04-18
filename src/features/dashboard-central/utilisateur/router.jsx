import { EntreprisesProvider } from "../entreprise/context/entreprises/EntreprisesProvider";
import { UtilisateurProvider } from "./context/utilisateur/UtilisateurProvider";
import { UtilisateursProvider } from "./context/utilisateurs/UtilisateursProvider";
import { CreateUtilisateurPage } from "./pages/CreateUtilisateurPage";
import { UpdatePasswordUtilisateurPage } from "./pages/UpdatePasswordUtilisateurPage";
import { UpdateUtilisateurPage } from "./pages/UpdateUtilisateurPage";
import { UtilisateursPage } from "./pages/UtilisateursPage";

const utilisateurRoutes = [
  {
    path: "utilisateurs",
    element: <EntreprisesProvider />,
    children: [
      {
        path: "",
        element: <UtilisateursProvider />,
        children: [
          {
            path: "",
            element: <UtilisateursPage />,
          },
          {
            path: "create",
            element: <CreateUtilisateurPage />,
          },
          {
            path: ":utilisateur_id",
            element: <UtilisateurProvider />,
            children: [
              {
                path: "update",
                element: <UpdateUtilisateurPage />,
              },
              {
                path: "password",
                element: <UpdatePasswordUtilisateurPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default utilisateurRoutes;
