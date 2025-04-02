import { AUTH_ACTIONS } from "./AUTH_ACTIONS"

export function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user }

    case AUTH_ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    default:
      return state
  }
}