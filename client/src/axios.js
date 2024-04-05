import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://13.201.12.205:8800/api/",
  withCredentials: true,
});
