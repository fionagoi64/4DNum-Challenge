import axios from "axios";

export const BaseURL = "https://dev.backend.4dnum.com/";
export const API_V1 = "api/v1";

export const axiosPublic = axios.create({
  baseURL: BaseURL,
});

axiosPublic.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) { }
);


