import { useParams } from "react-router-dom";
import BreadcrumbUpdateEntreprises from "../components/update-entreprise-page/BreadcrumbUpdateEntreprises";
import { useEntrepriseContext } from "../context/entreprise/EntrepriseProvider";
import useEntreprisesActions from "../hooks/useEntreprisesActions";
import { useEffect } from "react";
import { FormUpdateEntreprise } from "../components/update-entreprise-page/FormUpdateEntreprise";

export function UpdateEntreprisePage() {
  const { entreprise_id } = useParams();
  const { entrepriseState } = useEntrepriseContext();
  const { getEntreprise } = useEntreprisesActions();
  useEffect(() => {
    getEntreprise(entreprise_id);
  }, [entreprise_id]);
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbUpdateEntreprises entreprise={entrepriseState?.entreprise} />
      <FormUpdateEntreprise entreprise={entrepriseState?.entreprise} />
    </div>
  );
}
