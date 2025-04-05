import { UTILISATEUR_ACTIONS } from "./UTILISATEUR_ACTIONS";

export function UtilisateurReducer(state, action) {
  switch (action.type) {
    case UTILISATEUR_ACTIONS.SET_UTILISATEUR:
      return {
        ...state,
        utilisateur: action.payload.utilisateur,
      };

    case UTILISATEUR_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}
