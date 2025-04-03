import axiosClient from "../../../../config/axiosClient";

const EntrepriseService = {
  getEntreprises(queryString = "") {
    return axiosClient.get(`/dashboard-central/entreprises?${queryString}`);
  },
  getEntreprise(entrepriseId) {
    return axiosClient.get(`/dashboard-central/entreprises/${entrepriseId}`);
  },
  createEntreprise(payload) {
    return axiosClient.post(`/dashboard-central/entreprises`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateEntreprise(entrepriseId, payload) {
    return axiosClient.post(
      `/dashboard-central/entreprises/${entrepriseId}`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
  updateStatusEntreprise(entrepriseId, payload) {
    return axiosClient.post(
      `/dashboard-central/entreprises/${entrepriseId}/status`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
export default EntrepriseService;
