import { useRef, useState } from "react";
import useEntreprisesActions from "../../hooks/useEntreprisesActions";
import { toastError, toastSuccess } from "../../../../../helper";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export default function FormCreateEntreprise() {
  const { createEntreprise, inProgress } = useEntreprisesActions();
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const localisationRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const iceRef = useRef(null);
  const emailRef = useRef(null);
  const web_siteRef = useRef(null);
  const sloganRef = useRef(null);

  const [status, setStatus] = useState(true);
  const [logo, setLogo] = useState(null);

  const handleOnSubmitCreateEntrepriseForm = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        name: nameRef.current.value,
        localisation: localisationRef.current.value,
        phone: phoneRef.current.value,
        address: addressRef.current.value,
        ice: iceRef.current.value,
        email: emailRef.current.value,
        web_site: web_siteRef.current.value,
        slogan: sloganRef.current.value,
        status,
        logo,
      };
      const message = await createEntreprise(payload);
      if (message) {
        toastSuccess(message);
        navigate(`/central/entreprises`);
      }
    } catch (error) {
      toastError(error.response.data.error);
    }
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  return (
    <form
      onSubmit={handleOnSubmitCreateEntrepriseForm}
      className="flex flex-col gap-4 p-4 bg-white border-2 rounded-md border-gray-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_NAME" className="font-bold">
            Nom <span className="text-red-700">*</span>
          </label>
          <input
            ref={nameRef}
            id="ID_NAME"
            type="text"
            placeholder="Nom"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_ADDRESS" className="font-bold">
            Adresse <span className="text-red-700">*</span>
          </label>
          <input
            ref={addressRef}
            id="ID_ADDRESS"
            type="text"
            placeholder="Adresse"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_LOCALISATION" className="font-bold">
            Localisation
          </label>
          <input
            ref={localisationRef}
            id="ID_LOCALISATION"
            type="text"
            placeholder="Localisation"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_PHONE" className="font-bold">
            Téléphone
          </label>
          <input
            ref={phoneRef}
            id="ID_PHONE"
            type="text"
            placeholder="Téléphone"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_ICE" className="font-bold">
            ICE
          </label>
          <input
            ref={iceRef}
            id="ID_ICE"
            type="text"
            placeholder="ICE"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_EMAIL" className="font-bold">
            Email
          </label>
          <input
            ref={emailRef}
            id="ID_EMAIL"
            type="email"
            placeholder="Email"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_WEBSITE" className="font-bold">
            Site Web
          </label>
          <input
            ref={web_siteRef}
            id="ID_WEBSITE"
            type="text"
            placeholder="Site Web"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="ID_SLOGAN" className="font-bold">
            Slogan
          </label>
          <input
            ref={sloganRef}
            id="ID_SLOGAN"
            type="text"
            placeholder="Slogan"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2 relative">
          <label htmlFor="ID_LOGO" className="font-bold">
            Logo
          </label>
          <div className="relative w-full">
            <input
              id="ID_LOGO"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="w-full px-6 py-3 border-2 rounded-md border-gray-400 cursor-pointer file:hidden"
            />
            <FiUpload
              size={20}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
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
          <span>Créer l'entreprise</span>
        )}
      </button>
    </form>
  );
}
