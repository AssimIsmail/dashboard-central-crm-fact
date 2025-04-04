import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEntreprisesActions from "../../hooks/useEntreprisesActions";
import { toastError, toastSuccess } from "../../../../../helper";
import { FaSpinner } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export function FormUpdateEntreprise({ entreprise }) {
  const { updateEntreprise, inProgress } = useEntreprisesActions();
  const navigate = useNavigate();

  const nameRef = useRef();
  const localisationRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const iceRef = useRef();
  const emailRef = useRef();
  const web_siteRef = useRef();
  const sloganRef = useRef();

  const [logo, setLogo] = useState(null);

  const handleOnSubmitUpdateEntrepriseForm = async (event) => {
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
        logo,
      };

      const message = await updateEntreprise(entreprise?.id, payload);
      if (message) {
        toastSuccess(message);
        navigate(`/central/entreprises`);
      }
    } catch (error) {
      toastError(error.response?.data?.error);
    }
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  return (
    <form
      onSubmit={handleOnSubmitUpdateEntrepriseForm}
      className="flex flex-col gap-4 p-4 bg-white border-2 rounded-md border-gray-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Nom</label>
          <input
            ref={nameRef}
            defaultValue={entreprise?.name}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Adresse</label>
          <input
            ref={addressRef}
            defaultValue={entreprise?.address}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Localisation</label>
          <input
            ref={localisationRef}
            defaultValue={entreprise?.localisation}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Téléphone</label>
          <input
            ref={phoneRef}
            defaultValue={entreprise?.phone}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">ICE</label>
          <input
            ref={iceRef}
            defaultValue={entreprise?.ice}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Email</label>
          <input
            ref={emailRef}
            defaultValue={entreprise?.email}
            type="email"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Site Web</label>
          <input
            ref={web_siteRef}
            defaultValue={entreprise?.web_site}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-bold">Slogan</label>
          <input
            ref={sloganRef}
            defaultValue={entreprise?.slogan}
            type="text"
            className="w-full px-6 py-3 border-2 rounded-md border-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full gap-2 relative">
          <label className="font-bold">Logo</label>

          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="w-full px-6 py-3 border-2 rounded-md border-gray-400 pr-12"
            />

            <FiUpload
              size={20}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none z-10"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={inProgress}
        className={`w-fit border border-gray-500 font-bold p-3 px-6 rounded-md bg-white flex items-center gap-2 ${inProgress ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"}`}
      >
        {inProgress ? (
          <>
            <FaSpinner size={16} className="animate-spin" />
            <span>En cours de mise à jour...</span>
          </>
        ) : (
          <span>Mettre à jour l'entreprise</span>
        )}
      </button>
    </form>
  );
}
