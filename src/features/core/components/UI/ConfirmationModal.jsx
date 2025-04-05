import { MdClose } from "react-icons/md";

export default function ConfirmationModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-110 text-center">
        <p className="text-gray-900 text-lg font-medium">{message}</p>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={onConfirm} className="px-6 py-2 bg-[#001F3F] text-white rounded-md w-50 cursor-pointer">
            Oui
          </button>
          <button onClick={onClose} className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md w-50 cursor-pointer">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
