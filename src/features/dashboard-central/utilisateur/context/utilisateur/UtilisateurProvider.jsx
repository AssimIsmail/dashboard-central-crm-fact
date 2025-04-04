import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import UtilisateurContext from "./UtilisateurContext";
import { UtilisateurReducer } from "./UtilisateurReducer";
import { UtilisateurInitialState } from "./UtilisateurInitialState";

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
