import { ENTREPRISE_ACTIONS } from "./ENTREPRISE_ACTIONS";

export function EntrepriseReducer(state, action) {
  switch (action.type) {
    case ENTREPRISE_ACTIONS.SET_ENTREPRISE:
      return {
        ...state,
        entreprise: action.payload.entreprise,
      };

    case ENTREPRISE_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}
