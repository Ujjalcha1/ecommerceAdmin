import { axiosPrivateInstance } from "../axios/axios";
const getToken = localStorage.getItem("accessToken");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken}`,
};

export default class adminService {
  static adminLogin = async (payload: any) => {
    try {
      const response = await axiosPrivateInstance.post(`admin-login`, payload);
      return response.data;
    } catch (e: any) {
      throw new Error(e);
    }
  };

  static getAllCategory = async () => {
    try {
      const response = await axiosPrivateInstance.get(`categories`, {
        headers,
      });
      return response.data;
    } catch (e: any) {
      throw new Error(e);
    }
  };
}
