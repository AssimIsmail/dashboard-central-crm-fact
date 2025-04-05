import { Link } from "react-router-dom";

export default function BreadcrumbUtilisateurs() {
  return (
    <div className="flex gap-1 text-sm">
      <Link className="line-clamp-1 text-gray-400" to={"/"}>
        Accueil
      </Link>
      <span className="px-1">/</span>
      <h2 className="line-clamp-1">Utilisateurs</h2>
    </div>
  );
}
