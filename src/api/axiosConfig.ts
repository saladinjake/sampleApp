import axios from "axios";
const deleteToken = () =>{
	localStorage.clear();
	sessionStorage.clear()
}

const urlEnv ='https://fe-task-api.ainstack.io'
const axiosInstance = axios.create({
  baseURL: urlEnv,
  headers: {
    "Content-Type": "application/json",
    clientId: "somerandom-id-generator",
  },
});



axiosInstance.interceptors.request.use(
  (config) => {


    return config;
  },
  (error) => {
    return error;
  }
);

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      deleteToken();
    }

    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      deleteToken();
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
