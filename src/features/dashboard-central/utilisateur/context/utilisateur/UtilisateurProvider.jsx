import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import UtilisateurContext from "./UtilisateursContext";
import { UtilisateurReducer } from "./UtilisateursReducer";
import { UtilisateurInitialState } from "./UtilisateursInitialState";

export const useUtilisateurContext = () => useContext(UtilisateurContext);

export function UtilisateurProvider() {
  const [utilisateurState, utilisateurDispatch] = useReducer(
    UtilisateurReducer,
    UtilisateurInitialState
  );

  return (
    <UtilisateurContext.Provider
      value={{ utilisateurState, utilisateurDispatch }}
    >
      <Outlet />
    </UtilisateurContext.Provider>
  );
}
