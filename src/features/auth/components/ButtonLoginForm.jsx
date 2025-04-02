import { FaSpinner } from "react-icons/fa";

export default function ButtonLoginForm({ inProgress }) {
  return (
    <button
      type="submit"
      disabled={inProgress}
      className={`flex w-full items-center justify-center gap-2 rounded-md border-2  cursor-pointer
        px-4 py-3 transition duration-200 
        ${
          inProgress
            ? "border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
            : "border-black bg-white text-black hover:bg-gray-600 hover:text-white"
        }`}
    >
      {inProgress ? (
        <>
          <FaSpinner size={16} className="animate-spin" />
          <span>Connexion en cours...</span>
        </>
      ) : (
        <span>Se connecter</span>
      )}
    </button>
  );
}