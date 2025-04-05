import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilerModalUtilisateur from "./FilerModalUtilisateur";

export default function ButtonFilterUtilisateur({entreprises}) {
  const [isUtilisateurFilterOpen, setIsUtilisateurFilterOpen] = useState(false);

  const handleOnClickOpenUtilisateurFilter = () => {
    setIsUtilisateurFilterOpen(true);
  };

  const handleOnClickCloseUtilisateurFilter = () => {
    setIsUtilisateurFilterOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOnClickOpenUtilisateurFilter}
        className="flex items-center gap-2 p-2 px-4 bg-white border-1 rounded-md border-gray-700 text-dark hover:bg-light cursor-pointer"
      >
        <FiFilter size={16} className="text-gray-700" />
        <div className="font-bold text-gray-700">Filter</div>
      </button>
      <FilerModalUtilisateur
        isOpen={isUtilisateurFilterOpen}
        onClose={handleOnClickCloseUtilisateurFilter}
        entreprises={entreprises}
      />
    </>
  );
}
