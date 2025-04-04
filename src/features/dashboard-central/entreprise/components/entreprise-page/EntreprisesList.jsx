import EntrepriseListItem from "./EntrepriseListItem";

export default function EntreprisesList({ entreprises }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2">
      {entreprises?.map((entreprise) => (
        <EntrepriseListItem key={entreprise.id} entreprise={entreprise} />
      ))}
    </div>
  );
}
