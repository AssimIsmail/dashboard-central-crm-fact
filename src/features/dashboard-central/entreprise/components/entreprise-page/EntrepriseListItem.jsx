import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone, FiGlobe, FiEdit } from "react-icons/fi";
import ConfirmationModal from "../../../../core/components/UI/ConfirmationModal";
import useEntreprisesActions from "../../hooks/useEntreprisesActions";
import { toastError, toastSuccess } from "../../../../../helper";
import { Link } from "react-router-dom";

export default function EntrepriseListItem({ entreprise }) {
  const [isActive, setIsActive] = useState(entreprise?.status);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { updateStatusEntreprise } = useEntreprisesActions();

  const handleToggle = () => {
    setShowConfirmation(true);
  };

  const confirmToggle = async () => {
    try {
      const newStatus = !isActive ? 1 : 0;

      const payload = {
        status: newStatus, 
      };
     const message =  await updateStatusEntreprise(entreprise?.id, payload);
      setIsActive(newStatus);
      toastSuccess(message);

    } catch (error) {
      toastError(error.response.data.error);
    } finally {
      setShowConfirmation(false);
    }
  };
  return (
    <div className="relative flex flex-col rounded-md border-2 border-gray-300 bg-white p-2 gap-2 w-full">
      <button
        onClick={handleToggle}
        className={`absolute top-2 right-2 rounded-md px-2 py-1 text-xs font-bold cursor-pointer
          ${isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {isActive ? "Active" : "Inactive"}
      </button>

      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16"
          alt={entreprise?.name}
          title={entreprise?.name}
          src={`http://api.crm-facturation.com:8000/storage/${entreprise?.logo}`}
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{entreprise?.name}</h2>
          <p className="text-xs text-gray-500">{entreprise?.slogan}</p>
        </div>
      </div>
      <div className="space-y-1 text-gray-600 text-sm">
        <p className="flex items-center gap-2">
          <CiMail size={18} /> {entreprise?.email}
        </p>
        <p className="flex items-center gap-2">
          <FiPhone size={18} /> {entreprise?.phone}
        </p>
        <p className="flex items-center gap-2">
          <FiGlobe size={18} /> {entreprise?.web_site}
        </p>
      </div>
      <div className="flex justify-between gap-1">
        <div className="flex justify-between items-center border border-gray-300 px-4 py-2 rounded-md w-40">
          <span className="text-gray-600 font-medium">Utilisateurs</span>
          <p className="text-gray-800 font-semibold">30</p>
        </div>
        <div className="flex justify-between items-center border border-gray-300 px-4 py-2 rounded-md w-40">
          <span className="text-gray-600 font-medium">Factures</span>
          <p className="text-gray-800 font-semibold">199</p>
        </div>
        <Link to={`/central/entreprises/${entreprise.id}/update`} className="flex justify-between items-center border border-gray-300  rounded-md p-2 ">
        <FiEdit
          size={18}/>          
        </Link>
      </div>
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmToggle}
        message={`Êtes-vous sûr de vouloir ${isActive ? "désactiver" : "activer"} l’entreprise ${entreprise?.name} ?`}
      />
    </div>
  );
}
