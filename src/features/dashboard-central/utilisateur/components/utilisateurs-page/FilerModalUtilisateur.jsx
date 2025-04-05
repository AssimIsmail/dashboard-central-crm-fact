import { useSearchParams } from "react-router-dom";
import FilerModal from "../../../../core/components/UI/FilerModal";
import { useEffect, useRef, useState } from "react";

export default function FilerModalUtilisateur({
  onClose,
  isOpen,
  entreprises,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);

  const [status, setStatus] = useState(null);
  const [role, setRole] = useState(null);
  const entrepriseIdRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const filters = {
      entreprise_id: entrepriseIdRef.current.value,
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
    entrepriseIdRef.current.value = "";
    setStatus("");
    setRole("");

    setSearchParams({ page: "1" });
  };
  useEffect(() => {
    if (isOpen) {
      if (fullnameRef.current)
        fullnameRef.current.value = searchParams.get("full_name") || "";
      if (emailRef.current)
        emailRef.current.value = searchParams.get("email") || "";
      if (entrepriseIdRef.current)
        entrepriseIdRef.current.value = searchParams.get("entreprise_id") || "";
      setStatus(searchParams.get("status") || "");
      setRole(searchParams.get("role") || "");
    }
  }, [isOpen]);

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
        <div className="flex flex-col gap-1">
          <label className="font-bold">Entreprise</label>
          <select
            ref={entrepriseIdRef}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez une entreprise
            </option>
            {entreprises?.map((entreprise) => (
              <option key={entreprise.id} value={entreprise.id}>
                {entreprise.name} - {entreprise.localisation}
              </option>
            ))}
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
