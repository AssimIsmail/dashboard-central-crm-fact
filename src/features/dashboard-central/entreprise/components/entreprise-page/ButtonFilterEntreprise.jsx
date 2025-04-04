import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilerModalEntreprise from "./FilerModalEntreprise";

export default function ButtonFilterEntreprise() {
  const [isEntrepriseFilterOpen, setIsEntrepriseFilterOpen] = useState(false);

  const handleOnClickOpenEntrepriseFilter = () => {
    setIsEntrepriseFilterOpen(true);
  };

  const handleOnClickCloseEntrepriseFilter = () => {
    setIsEntrepriseFilterOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOnClickOpenEntrepriseFilter}
        className="flex items-center gap-2 p-2 px-4 bg-white border-1 rounded-md border-gray-500 text-dark hover:bg-light cursor-pointer"
      >
        <FiFilter size={16} className="text-gray-500" />
        <div className="font-bold text-gray-500">Filter</div>
      </button>
      <FilerModalEntreprise
        isOpen={isEntrepriseFilterOpen}
        onClose={handleOnClickCloseEntrepriseFilter}
      />
    </>
  );
}
