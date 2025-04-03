import { ENTREPRISES_ACTIONS } from "./ENTREPRISES_ACTIONS";

export function EntreprisesReducer(state, action) {
  switch (action.type) {
    case ENTREPRISES_ACTIONS.SET_ENTREPRISES:
      return {
        ...state,
        entreprises: action.payload.entreprises,
        pagination: action.payload.pagination,
      };

    case ENTREPRISES_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}
