import { UTILISATEURS_ACTIONS } from "./UTILISATEURS_ACTIONS";

export function UtilisateursReducer(state, action) {
  switch (action.type) {
    case UTILISATEURS_ACTIONS.SET_UTILISATEURS:
      return {
        ...state,
        utilisateurs: action.payload.utilisateurs,
        pagination: action.payload.pagination,
      };

    case UTILISATEURS_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}
