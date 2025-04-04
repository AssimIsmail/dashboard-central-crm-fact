import BreadcrumbCreateEntreprises from "../components/create-entreprise-page/BreadcrumbCreateEntreprises";
import FormCreateEntreprise from "../components/create-entreprise-page/FormCreateEntreprise";

export function CreateEntreprisePage() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BreadcrumbCreateEntreprises />
      <FormCreateEntreprise/>
    </div>
  );
}
