import { createContext } from "react";
import { EntreprisesInitialState } from "./EntreprisesInitialState";

const EntreprisesContext = createContext(EntreprisesInitialState);

export default EntreprisesContext;
