import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://api.crm-facturation.com:8000/api` ,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   if (window.location.pathname !== "/session") {
    //     window.location.href = "/session"; 
    //   }
    // }
    throw error;
  }
);

export default axiosClient;