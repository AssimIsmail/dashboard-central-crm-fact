import toast from "react-hot-toast";

function toastError(message) {
  toast.custom((t) => (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${
        t.visible ? "animate-fade-in" : "animate-fade-out"
      } pointer-events-auto flex w-full max-w-sm rounded-md border border-red-500 bg-white p-3 sm:p-4 text-xs sm:text-sm text-red-700 shadow-md z-50`}
    >
      <div className="flex flex-col gap-0.5">
        {/* <h3 className="font-bold">Erreur</h3> */}
        <p>{message}</p>
      </div>
    </div>
  ));
}

function toastSuccess(message) {
  toast.custom((t) => (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${
        t.visible ? "animate-fade-in" : "animate-fade-out"
      } pointer-events-auto flex w-full max-w-sm rounded-md border border-green-500 bg-white p-3 sm:p-4 text-xs sm:text-sm text-green-700 shadow-md z-50`}
    >
      <div className="flex flex-col gap-0.5">
        {/* <h3 className="font-bold">Notification</h3> */}
        <p>{message}</p>
      </div>
    </div>
  ));
}
function getRoleLabel(role) {
  const roleMap = {
    ADMIN_CENTRAL: "Administrateur Central",
    USER: "Utilisateur",
  };

  return roleMap[role] || role;
}
export { toastSuccess, toastError, getRoleLabel };
