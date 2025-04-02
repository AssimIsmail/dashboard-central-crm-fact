import { Toaster } from "react-hot-toast";
import FormLogin from "../components/FormLogin";
import logo from "../../../../public/logo_assim.png";

export default function LoginPage() {
  return (
    <>
      <Toaster position="top-left" />
      <div className="flex h-screen w-full items-center justify-center px-4 md:px-16">
        <div className="w-full rounded-lg border-2 text-black  p-8 shadow-lg md:w-[542px]">
          <div className="flex flex-col items-center gap-4 text-center lg:mt-0 lg:w-full">
            <img src={logo} alt="Logo" width={128} height={128} className="mb-4" />
            <div>
              <h1 className="text-2xl font-bold text-black">
                Centre de Gestion des Factures
              </h1>
              <p className="text-xl font-light text-black">
                Système CRM pour la gestion des factures et des clients
              </p>
            </div>
          </div>
          <div className="mt-6">
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
}