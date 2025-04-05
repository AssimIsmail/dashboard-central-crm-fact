import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUtilisateursActions from "../hooks/useUtilisateursActions";
import { useUtilisateurContext } from "../context/utilisateur/UtilisateurProvider";
import BreadcrumbUpdatePasswordUtilisateur from "../components/update-password-utilisateur-page/BreadcrumbUpdatePasswordUtilisateur";
import { FormUpdatePasswordUtilisateur } from "../components/update-password-utilisateur-page/FormUpdatePasswordUtilisateur";

export function UpdatePasswordUtilisateurPage() {
  const { utilisateur_id } = useParams();
  const { utilisateurState } = useUtilisateurContext();
  const { getUtilisateur } = useUtilisateursActions();

  useEffect(() => {
    getUtilisateur(utilisateur_id);
  }, [utilisateur_id]);
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbUpdatePasswordUtilisateur
        utilisateur={utilisateurState?.utilisateur}
      />
      <FormUpdatePasswordUtilisateur
        utilisateur={utilisateurState?.utilisateur}
      />
    </div>
  );
}
