import axios from "axios";

const api = axios.create({
  baseURL: "http://104.248.145.87:8080",
});

export default api;
