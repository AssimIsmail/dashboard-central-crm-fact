import { useEffect } from "react";
import BreadcrumbUtilisateurs from "../components/utilisateurs-page/BreadcrumbUtilisateurs";
import ButtonCreateUtilisateur from "../components/utilisateurs-page/ButtonCreateUtilisateur";
import ButtonFilterUtilisateur from "../components/utilisateurs-page/ButtonFilterUtilisateur";
import { useUtilisateursContext } from "../context/utilisateurs/UtilisateursProvider";
import useUtilisateursActions from "../hooks/useUtilisateursActions";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../core/components/UI/Pagination";
import UtilisateursList from "../components/utilisateurs-page/UtilisateursList";
import useEntreprisesActions from "../../entreprise/hooks/useEntreprisesActions";
import { useEntreprisesContext } from "../../entreprise/context/entreprises/EntreprisesProvider";
import LoaderUtilisateursList from "../components/update-utilisateur-page/LoaderUtilisateursList";

export function UtilisateursPage() {
  const [searchParams] = useSearchParams();
  const { getUtilisateurs } = useUtilisateursActions();
  const { utilisateursState } = useUtilisateursContext();
  const { entreprisesState } = useEntreprisesContext();
  const { getEntreprises } = useEntreprisesActions();

  useEffect(() => {
    getEntreprises();
    getUtilisateurs(searchParams.toString());
  }, [searchParams]);
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbUtilisateurs />
      <div className="flex items-center justify-between">
        <ButtonCreateUtilisateur />
        <ButtonFilterUtilisateur  entreprises={entreprisesState?.entreprises} />
      </div>
      {utilisateursState.isLoading ? (
        <LoaderUtilisateursList />
      ) : (
        <UtilisateursList utilisateurs={utilisateursState.utilisateurs} />
        )}
      <Pagination
        isLoading={utilisateursState.isLoading}
        pagination={utilisateursState.pagination}
      />
    </div>
  );
}
