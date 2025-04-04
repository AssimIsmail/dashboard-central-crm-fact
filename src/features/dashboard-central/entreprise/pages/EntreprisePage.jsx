import { useEffect } from "react";
import Breadcrumbentreprises from "../components/entreprise-page/Breadcrumbentreprises";
import ButtonCreateEntreprise from "../components/entreprise-page/ButtonCreateEntreprise";
import ButtonFilterEntreprise from "../components/entreprise-page/ButtonFilterEntreprise";
import useEntreprisesActions from "../hooks/useEntreprisesActions";
import { useSearchParams } from "react-router-dom";
import { useEntreprisesContext } from "../context/entreprises/EntreprisesProvider";
import Pagination from "../../../core/components/UI/Pagination";
import EntreprisesList from "../components/entreprise-page/EntreprisesList";

export function EntreprisePage() {
  const [searchParams] = useSearchParams();
  const { getEntreprises } = useEntreprisesActions();
  const { entreprisesState } = useEntreprisesContext();
// console.log(entreprisesState);

  useEffect(() => {
    getEntreprises(searchParams.toString());
  }, [searchParams]);
  return (
    <div className="flex w-full flex-col gap-2">
      <Breadcrumbentreprises />
      <div className="flex items-center justify-between">
        <ButtonCreateEntreprise />
        <ButtonFilterEntreprise />
      </div>
      {/* {entreprisesState.isLoading ? (
        <LoaderEntreprisesList />
      ) : (
        )} */}
        <EntreprisesList entreprises={entreprisesState.entreprises} />
      <Pagination
        isLoading={entreprisesState.isLoading}
        pagination={entreprisesState.pagination}
      />
    </div>
  );
}
