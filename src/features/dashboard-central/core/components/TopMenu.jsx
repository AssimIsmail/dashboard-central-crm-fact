import { CiMenuBurger } from "react-icons/ci";

export default function TopMenu({me}) {
  return (
    <div className="flex items-center justify-between  px-4 py-2 gap-4">
      <div className="flex items-center gap-3">
        <img
          src="/logo_assim.png"
          width={40}
          height={40}
          alt="Logo Assim"
          className="rounded-full border border-gray-400"
        />
        <div className="text-sm md:text-base">
          <h2 className="font-bold text-black">
            Centre de Gestion des Factures
          </h2>
          <h3 className="text-xs md:text-sm text-gray-600">
            CRM pour la gestion des factures
          </h3>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3 ml-auto">
        <span className="text-gray-800 font-semibold border rounded-md p-2">{me.first_name} {me.last_name}</span>
      </div>
      <div className="flex justify-end items-center gap-3">
        <button className="md:hidden p-2 border rounded-md border-blue-400">
          <CiMenuBurger className="text-gray-800" size={24} />
        </button>
      </div>
    </div>
  );
}