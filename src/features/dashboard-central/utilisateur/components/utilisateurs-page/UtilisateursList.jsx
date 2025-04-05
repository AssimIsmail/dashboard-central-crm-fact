import UtilisateurListItem from "./UtilisateurListItem";

export default function UtilisateursList({ utilisateurs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full gap-2">
      {utilisateurs?.map((utilisateur) => (
        <UtilisateurListItem key={utilisateur.id} utilisateur={utilisateur} />
      ))}
    </div>
  );
}
