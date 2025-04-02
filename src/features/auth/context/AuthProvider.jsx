import { useContext, useReducer } from "react"
import AuthContext from "./AuthContext"
import { authReducer } from "./authReducer"
import { authInitialState } from "./authInitialState"

/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {string} user - The username or ID of the authenticated user.
 * @property {string} token - The authentication token.
 */

/**
 * @typedef {Object} AuthContextValue
 * @property {AuthState} authState - The current authentication state.
 * @property {Function} authDispatch - The dispatch function for authentication actions.
 */

// Custom hook to use the Auth context
/**
 * @returns {AuthContextValue} The authentication context value.
 */

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState)

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}