import { useParams } from "react-router-dom";
import BreadcrumbUpdateUtilisateur from "../components/update-utilisateur-page/BreadcrumbUpdateUtilisateur";
import { useUtilisateurContext } from "../context/utilisateur/UtilisateurProvider";
import useUtilisateursActions from "../hooks/useUtilisateursActions";
import { useEffect } from "react";
import { FormUpdateUtilisateur } from "../components/update-utilisateur-page/FormUpdateUtilisateur";
import useEntreprisesActions from "../../entreprise/hooks/useEntreprisesActions";
import { useEntreprisesContext } from "../../entreprise/context/entreprises/EntreprisesProvider";

export function UpdateUtilisateurPage() {
  const { utilisateur_id } = useParams();
  const { utilisateurState } = useUtilisateurContext();
  const { getUtilisateur } = useUtilisateursActions();
  const { entreprisesState } = useEntreprisesContext();
  const { getEntreprises } = useEntreprisesActions();

  useEffect(() => {
    getEntreprises();
    getUtilisateur(utilisateur_id);
  }, [utilisateur_id]);
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbUpdateUtilisateur
        utilisateur={utilisateurState?.utilisateur}
      />
      <FormUpdateUtilisateur
        utilisateur={utilisateurState?.utilisateur}
        entreprises={entreprisesState?.entreprises}
      />
    </div>
  );
}
