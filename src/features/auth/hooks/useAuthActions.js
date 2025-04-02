import { AUTH_ACTIONS } from "../context/AUTH_ACTIONS"
import { useAuthContext } from "../context/AuthProvider"
import AuthService from "../services/AuthService"

export default function useAuthActions() {
  const { authDispatch } = useAuthContext()

  async function getCurrentUser() {
    try {
      authDispatch({
        type: AUTH_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: true,
        },
      })
      const { data } = await AuthService.getCurrentUser()

      authDispatch({
        type: AUTH_ACTIONS.SET_CURRENT_USER,
        payload: {
          user: data.user,
        },
      })
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // throw error
    } finally {
      authDispatch({
        type: AUTH_ACTIONS.SET_IS_LOADING,
        payload: {
          isLoading: false,
        },
      })
    }
  }

  async function login(payload) {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await AuthService.login(payload)
      authDispatch({
        type: AUTH_ACTIONS.SET_CURRENT_USER,
        payload: {
          user: data.user,
        },
      })
      return data.message
    } catch (error) {
      throw error
    }
  }

  return { login, getCurrentUser }
}