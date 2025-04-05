import { useSearchParams } from "react-router-dom";
import FilerModal from "../../../../core/components/UI/FilerModal";
import { useRef, useState } from "react";
import { useEntreprisesContext } from "../../../entreprise/context/entreprises/EntreprisesProvider";

export default function FilerModalUtilisateur({ onClose, isOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { entreprisesState } = useEntreprisesContext();
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);


  const [status, setStatus] = useState(null);
  const [role, setRole] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const filters = {
      full_name: fullnameRef.current.value,
      email: emailRef.current.value,
      status,
      role,
    };
    setSearchParams({ ...filters, page: "1" });
    onClose();
  };

  const handleReset = () => {
    fullnameRef.current.value = "";
    emailRef.current.value = "";
    setStatus("");
    setRole("");

    setSearchParams({ page: "1" });
  };

  return (
    <FilerModal onClose={onClose} isOpen={isOpen}>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_FULL_NAME" className="font-base">
            Nom Complet
          </label>
          <input
            ref={fullnameRef}
            type="text"
            id="ID_FULL_NAME"
            placeholder="Nom Complet"
            className="w-full rounded-md border-1 px-6 py-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_EMAIL" className="font-base">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            id="ID_EMAIL"
            placeholder="email"
            className="w-full rounded-md border-1  px-6 py-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_STATUS" className="font-base">
            Statut
          </label>
          <select
            id="ID_STATUS"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-md border-1  px-6 py-3 bg-white"
          >
            <option value="">Sélectionner un statut</option>
            <option value="1">Actif</option>
            <option value="0">Inactif</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_ROLE" className="font-base">
            Role
          </label>
          <select
            id="ID_ROLE"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-md border-1  px-6 py-3 bg-white"
          >
            <option value="">Sélectionner un role</option>
            <option value="ADMIN_CENTRAL">Administrateur Central</option>
            <option value="USER">Utilisateur</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full rounded-md  bg-gray-700 px-4 py-3 text-white cursor-pointer"
          >
            Rechercher
          </button>
          <button
            type="button"
            className="w-full rounded-md border-2 bg-white px-4 py-3 cursor-pointer"
            onClick={handleReset}
          >
            Réinitialiser
          </button>
        </div>
      </form>
    </FilerModal>
  );
}
