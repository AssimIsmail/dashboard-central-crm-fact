import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useUtilisateursActions from "../../hooks/useUtilisateursActions";
import { toastError, toastSuccess } from "../../../../../helper";
import { FaSpinner } from "react-icons/fa";

export function FormUpdateUtilisateur({ utilisateur, entreprises }) {
  const { utilisateur_id } = useParams();
  const { updateUtilisateur, inProgress } = useUtilisateursActions();

  const navigate = useNavigate();

  const entrepriseIdRef = useRef(null);
  const first_nameRef = useRef(null);
  const last_nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);
  //   const statusRef = useRef(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        entreprise_id: parseInt(entrepriseIdRef.current.value),
        first_name: first_nameRef.current.value,
        last_name: last_nameRef.current.value,
        email: emailRef.current.value,
        role: roleRef.current.value,
        // status: statusRef.current.value,
      };

      const message = await updateUtilisateur(utilisateur.id, payload);
      if (message) {
        toastSuccess(message);
        navigate("/central/utilisateurs");
      }
    } catch (error) {
      toastError(
        error?.response?.data?.error || "Erreur lors de la mise à jour."
      );
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col gap-4 p-4 bg-white border-2 rounded-md border-gray-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-bold">Entreprise</label>
          <select
            ref={entrepriseIdRef}
            defaultValue={utilisateur?.entreprise_id}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
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
        <div className="flex flex-col gap-2">
          <label className="font-bold">Prénom</label>
          <input
            ref={first_nameRef}
            type="text"
            placeholder="Prénom"
            defaultValue={utilisateur?.first_name}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Nom</label>
          <input
            ref={last_nameRef}
            type="text"
            placeholder="Nom"
            defaultValue={utilisateur?.last_name}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            defaultValue={utilisateur?.email}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Rôle</label>
          <select
            ref={roleRef}
            defaultValue={utilisateur?.role}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          >
            <option value="ADMIN_CENTRAL">Administrateur Central</option>
            <option value="USER">Utilisateur</option>
          </select>
        </div>
        {/* <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_STATUS" className="font-bold">
            Statut
          </label>
          <select
            ref={statusRef}
            id="ID_STATUS"
            defaultValue={utilisateur?.status}
            className="w-full rounded-md border-1 px-6 py-3 bg-white"
          >
            <option value="1">Actif</option>
            <option value="0">Inactif</option>
          </select>
        </div> */}
      </div>
      <div className="flex flex-row">
        <button
          type="submit"
          disabled={inProgress}
          className={`w-fit border border-gray-500 font-bold p-3 px-6 rounded-md bg-white flex items-center gap-2 mr-2 ${
            inProgress
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200 cursor-pointer"
          }`}
        >
          {inProgress ? (
            <>
              <FaSpinner size={16} className="animate-spin" />
              <span>Mise à jour...</span>
            </>
          ) : (
            <span>Mettre à jour l'utilisateur</span>
          )}
        </button>
        <Link
          to={`/central/utilisateurs/${utilisateur_id}/password`}
          className="w-fit border border-gray-500 font-bold p-3 px-6 rounded-md bg-gray-700 text-white flex items-center gap-2"
        >
          Modifier le mot de passe
        </Link>
      </div>
    </form>
  );
}
