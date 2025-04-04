import { useSearchParams } from "react-router-dom";
import FilerModal from "../../../../core/components/UI/FilerModal";
import { useRef, useState } from "react";

export default function FilerModalEntreprise({ onClose, isOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameRef = useRef(null);
  const ICERef = useRef(null);
  const paysRef = useRef(null);
  const [status, setStatus] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const filters = {
      name: nameRef.current.value,
      ice: ICERef.current.value,
      status,
      pays: paysRef.current.value,
    };
    setSearchParams({ ...filters, page: "1" });
    onClose();
  };

  const handleReset = () => {
    nameRef.current.value = "";
    ICERef.current.value = "";
    paysRef.current.value = "";
    setStatus("");
    setSearchParams({ page: "1" });
  };

  return (
    <FilerModal onClose={onClose} isOpen={isOpen}>
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_NAME" className="font-base">
            Nom
          </label>
          <input
            ref={nameRef}
            type="text"
            id="ID_NAME"
            placeholder="Nom"
            className="w-full rounded-md border-1 px-6 py-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="ID_ICE" className="font-base">
            ICE
          </label>
          <input
            ref={ICERef}
            type="text"
            id="ID_ICE"
            placeholder="ICE"
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
          <label htmlFor="ID_PAYS" className="font-base">
            Pays
          </label>
          <input
            ref={paysRef}
            type="text"
            id="ID_PAYS"
            placeholder="Pays"
            className="w-full rounded-md border-1 px-6 py-3"
          />
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
