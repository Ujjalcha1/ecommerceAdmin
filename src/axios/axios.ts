import axios from "axios";


  export const axiosPrivateInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });