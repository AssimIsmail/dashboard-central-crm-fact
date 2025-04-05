import BreadcrumbCreateUtilisateurs from "../components/create-utilisateur-page/BreadcrumbCreateUtilisateurs";
import FormCreateUtilisateur from "../components/create-utilisateur-page/FormCreateUtilisateur";
import { useEntreprisesContext } from "../../entreprise/context/entreprises/EntreprisesProvider";
import useEntreprisesActions from "../../entreprise/hooks/useEntreprisesActions";
import { useEffect } from "react";

export function CreateUtilisateurPage() {
  const { entreprisesState } = useEntreprisesContext();
  const { getEntreprises } = useEntreprisesActions();
  useEffect(() => {
    getEntreprises();
  }, []);
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbCreateUtilisateurs />
      <FormCreateUtilisateur entreprises={entreprisesState?.entreprises} />
    </div>
  );
}
