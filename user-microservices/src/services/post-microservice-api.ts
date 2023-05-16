import axios from "axios";

export const postMicroserviceAPI = axios.create({
  baseURL: "http://localhost:3000",
});
