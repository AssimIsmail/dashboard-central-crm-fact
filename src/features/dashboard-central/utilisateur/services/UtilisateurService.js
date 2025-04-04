import axiosClient from "../../../../config/axiosClient";

const UtilisateurService = {
  getUtilisateurs(queryString = "") {
    return axiosClient.get(`/dashboard-central/utilisateurs?${queryString}`);
  },
  getUtilisateur(utilisateurId) {
    return axiosClient.get(`/dashboard-central/utilisateurs/${utilisateurId}`);
  },
  createUtilisateur(payload) {
    return axiosClient.post(`/dashboard-central/utilisateurs`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateUtilisateur(utilisateurId, payload) {
    return axiosClient.post(
      `/dashboard-central/utilisateurs/${utilisateurId}`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
  updateStatusUtilisateur(utilisateurId, payload) {
    return axiosClient.post(
      `/dashboard-central/utilisateurs/${utilisateurId}/status`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
  updatePasswordUtilisateur(utilisateurId, payload) {
    return axiosClient.post(
      `/dashboard-central/utilisateurs/${utilisateurId}/change-password`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
export default UtilisateurService;
