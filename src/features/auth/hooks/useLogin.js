import { useState } from "react";
import useAuthActions from "./useAuthActions";
import { toastError } from "../../../helper";

export default function useLogin() {
  const { login } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnLogin = async (payload) => {
    try {
      setIsLoading(true);
      const message = await login(payload);
      return message;
    } catch (error) {
      if (error.response) {
        toastError(
          error.response.data.message ||
            "Une erreur est survenue lors de la connexion. Veuillez vérifier vos informations de connexion et réessayer."
        );
      } else if (error.request) {
        toastError(
          "Problème de connexion au serveur. Assurez-vous d'être connecté à Internet et réessayez."
        );
      } else {
        toastError(
          "Une erreur inattendue est survenue. Veuillez réessayer plus tard. Si le problème persiste, contactez le support."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleOnLogin };
}