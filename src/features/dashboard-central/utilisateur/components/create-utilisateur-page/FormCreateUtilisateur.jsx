import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUtilisateursActions from "../../hooks/useUtilisateursActions";
import { toastError, toastSuccess } from "../../../../../helper";
import { FaSpinner } from "react-icons/fa";

export default function FormCreateUtilisateur({ entreprises }) {
  const { createUtilisateur, inProgress } = useUtilisateursActions();

  const navigate = useNavigate();

  const entrepriseIdRef = useRef(null);
  const first_nameRef = useRef(null);
  const last_nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const [status, setStatus] = useState(true);

  const handleOnSubmitcreateUtilisateurForm = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        entreprise_id: parseInt(entrepriseIdRef.current.value),
        first_name: first_nameRef.current.value,
        last_name: last_nameRef.current.value,
        email: emailRef.current.value,
        role: roleRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmRef.current.value,
        status,
      };

      const message = await createUtilisateur(payload);
      if (message) {
        toastSuccess(message);
        navigate(`/central/utilisateurs`);
      }
    } catch (error) {
      toastError(error?.response?.data?.error || "Erreur lors de la création.");
    }
  };

  return (
    <form
      onSubmit={handleOnSubmitcreateUtilisateurForm}
      className="flex flex-col gap-4 p-4 bg-white border-2 rounded-md border-gray-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
          <label className="font-bold">Prénom</label>
          <input
            ref={first_nameRef}
            type="text"
            placeholder="Prénom"
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Nom</label>
          <input
            ref={last_nameRef}
            type="text"
            placeholder="Nom"
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Rôle</label>
          <select
            ref={roleRef}
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          >
            <option value="ADMIN_CENTRAL">Administrateur Central</option>
            <option value="USER">Utilisateur</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Mot de passe</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Mot de passe"
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Confirmation du mot de passe</label>
          <input
            ref={passwordConfirmRef}
            type="password"
            placeholder="Confirmer mot de passe"
            className="px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_STATUS" className="font-bold">
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
      </div>

      <button
        type="submit"
        disabled={inProgress}
        className={`w-fit border border-gray-500 font-bold p-3 px-6 rounded-md bg-white flex items-center gap-2 ${
          inProgress
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
      >
        {inProgress ? (
          <>
            <FaSpinner size={16} className="animate-spin" />
            <span>Encore en traitement...</span>
          </>
        ) : (
          <span>Créer l'utilisateur</span>
        )}
      </button>
    </form>
  );
}
