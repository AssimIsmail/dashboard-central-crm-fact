import axiosClient from "../../../config/axiosClient"

const AuthService = {
  login(payload) {
    return axiosClient.post(`/session/login`, payload)
  },
  getCurrentUser() {
    return axiosClient.get(`/session/me`)
  },
}

export default AuthService