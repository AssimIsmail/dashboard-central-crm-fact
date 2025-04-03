import { createContext } from "react";
import { EntrepriseInitialState } from "./EntrepriseInitialState";

const EntrepriseContext = createContext(EntrepriseInitialState);

export default EntrepriseContext;
