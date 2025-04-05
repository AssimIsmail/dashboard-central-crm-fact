import { Link } from "react-router-dom";

export default function ButtonCreateUtilisateur() {
  return (
    <Link
      className="w-fit border border-gray-400 font-bold p-2 px-4 rounded-md hover:bg-gray-200 bg-white"
      to={"/central/utilisateurs/create"}
    >
      Créer un utilisateur
    </Link>
  );
}
