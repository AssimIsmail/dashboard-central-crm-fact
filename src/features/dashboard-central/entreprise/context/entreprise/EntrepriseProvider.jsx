import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import EntrepriseContext from "./EntrepriseContext";
import { EntrepriseReducer } from "./EntrepriseReducer";
import { EntrepriseInitialState } from "./EntrepriseInitialState";


export const useEntrepriseContext = () => useContext(EntrepriseContext);

export function EntreprisesProvider() {
  const [entrepriseState, entrepriseDispatch] = useReducer(
    EntrepriseReducer,
    EntrepriseInitialState
  );

  return (
    <EntrepriseContext.Provider
      value={{ entrepriseState, entrepriseDispatch }}
    >
      <Outlet />
    </EntrepriseContext.Provider>
  );
}
