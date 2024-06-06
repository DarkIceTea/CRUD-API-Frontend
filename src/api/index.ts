import axios from "axios";

export const eventApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
