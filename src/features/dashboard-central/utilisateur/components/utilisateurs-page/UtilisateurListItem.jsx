import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiEdit, FiCheckCircle, FiXCircle } from "react-icons/fi";
import ConfirmationModal from "../../../../core/components/UI/ConfirmationModal";
import useUtilisateursActions from "../../hooks/useUtilisateursActions";
import { getRoleLabel, toastError, toastSuccess } from "../../../../../helper";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../auth/context/AuthProvider";

export default function UtilisateurListItem({ utilisateur }) {
  const [isActive, setIsActive] = useState(utilisateur?.status);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { updateStatusUtilisateur } = useUtilisateursActions();
  const { authState } = useAuthContext();
  const handleToggle = () => {
    setShowConfirmation(true);
  };

  const confirmToggle = async () => {
    try {
      const newStatus = !isActive ? 1 : 0;
      const payload = { status: newStatus };
      const message = await updateStatusUtilisateur(utilisateur?.id, payload);
      setIsActive(newStatus);
      toastSuccess(message);
    } catch (error) {
      toastError(error.response?.data?.error || "Erreur inattendue");
    } finally {
      setShowConfirmation(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col rounded-lg border-2 p-3 w-full transition-all duration-300  bg-white border-gray-300`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">
          {utilisateur?.first_name} {utilisateur?.last_name}
        </h2>
        {authState.currentUser.id !== utilisateur.id && (
          <button
            onClick={handleToggle}
            className={`absolute top-2 right-2 rounded-md px-2 py-1 text-xs font-bold cursor-pointer
            ${isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {isActive ? "Active" : "Inactive"}
          </button>
        )}
      </div>

      <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
        <CiMail size={18} /> {utilisateur?.email}
      </p>
      {utilisateur?.entreprise && (
        <p className="text-xs text-gray-500 mt-1">
          Entreprise:{" "}
          <span className="font-semibold text-gray-700">
            {utilisateur?.entreprise?.name}
          </span>
        </p>
      )}

      <div className="flex justify-between items-center mt-4 border-t pt-3">
        <div className="flex items-center gap-2 ">
          <span className="text-gray-500 text-sm whitespace-nowrap">
            Rôle :
          </span>
          <p className="text-gray-800 font-semibold">
            {" "}
            {getRoleLabel(utilisateur?.role)}
          </p>
        </div>

        <Link
          to={`/central/utilisateurs/${utilisateur.id}/update`}
          className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 text-gray-600 hover:bg-gray-100 transition-all duration-300"
        >
          <FiEdit size={18} />
          <span className="text-sm">Modifier</span>
        </Link>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmToggle}
        message={`Êtes-vous sûr de vouloir ${isActive ? "désactiver" : "activer"} ${utilisateur?.first_name} ${utilisateur?.last_name} ?`}
      />
    </div>
  );
}
