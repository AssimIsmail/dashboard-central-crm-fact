import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import EntreprisesContext from "./EntreprisesContext";
import { EntreprisesReducer } from "./EntreprisesReducer";
import { EntreprisesInitialState } from "./EntreprisesInitialState";

export const useEntreprisesContext = () => useContext(EntreprisesContext);

export function EntreprisesProvider() {
  const [entreprisesState, entreprisesDispatch] = useReducer(
    EntreprisesReducer,
    EntreprisesInitialState
  );

  return (
    <EntreprisesContext.Provider
      value={{ entreprisesState, entreprisesDispatch }}
    >
      <Outlet />
    </EntreprisesContext.Provider>
  );
}
