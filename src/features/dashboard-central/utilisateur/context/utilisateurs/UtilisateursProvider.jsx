import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import UtilisateursContext from "./UtilisateursContext";
import { UtilisateursReducer } from "./UtilisateursReducer";
import { UtilisateursInitialState } from "./UtilisateursInitialState";

export const useUtilisateursContext = () => useContext(UtilisateursContext);

export function UtilisateursProvider() {
  const [utilisateursState, utilisateursDispatch] = useReducer(
    UtilisateursReducer,
    UtilisateursInitialState
  );

  return (
    <UtilisateursContext.Provider
      value={{ utilisateursState, utilisateursDispatch }}
    >
      <Outlet />
    </UtilisateursContext.Provider>
  );
}
