import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { toastError, toastSuccess } from "../../../../../helper";  // Assurez-vous que ces helpers existent
import useUtilisateursActions from "../../hooks/useUtilisateursActions";
import { useRef } from "react";

export function FormUpdatePasswordUtilisateur({ utilisateur }) {
  const { updatePasswordUtilisateur, inProgress } = useUtilisateursActions();
  const navigate = useNavigate();

  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;


    try {
      const payload = {
        current_password: currentPassword,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,  
      };

      const message = await updatePasswordUtilisateur(utilisateur.id, payload);
      if (message) {
        toastSuccess(message);
        navigate(`/central/utilisateurs`);
      }
    } catch (error) {
      toastError(
        error?.response?.data?.error || "Erreur lors de la mise à jour du mot de passe."
      );
    }
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col gap-4 p-4 bg-white border-2 rounded-md border-gray-300"
    >
      <div className="flex flex-col gap-2">
        <label className="font-bold">Mot de passe actuel</label>
        <input
          ref={currentPasswordRef}
          type="password"
          placeholder="Mot de passe actuel"
          className="px-6 py-3 border-2 rounded-md border-gray-400"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Nouveau mot de passe</label>
        <input
          ref={newPasswordRef}
          type="password"
          placeholder="Nouveau mot de passe"
          className="px-6 py-3 border-2 rounded-md border-gray-400"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold">Confirmer le mot de passe</label>
        <input
          ref={confirmPasswordRef}
          type="password"
          placeholder="Confirmer le mot de passe"
          className="px-6 py-3 border-2 rounded-md border-gray-400"
          required
        />
      </div>

      <div className="flex flex-row">
        <button
          type="submit"
          disabled={inProgress}
          className={`w-fit border border-gray-500 font-bold p-3 px-6 rounded-md bg-white flex items-center gap-2 mr-2 ${
            inProgress ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"
          }`}
        >
          {inProgress ? (
            <>
              <FaSpinner size={16} className="animate-spin" />
              <span>Mise à jour...</span>
            </>
          ) : (
            <span>Mettre à jour le mot de passe</span>
          )}
        </button>
      </div>
    </form>
  );
}
