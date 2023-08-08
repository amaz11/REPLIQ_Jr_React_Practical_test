import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://puzzled-moth-top-coat.cyclic.app/api/v1/",
  withCredentials: false,
  credentials: "include",
});

export default BaseApi;
