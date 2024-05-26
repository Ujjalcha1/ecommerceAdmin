import axios from "axios";

export default class brandService {
  static brandRegister = async (payload:any) => {
    try {
      await axios.post(`process.env.VITE_BASE_URL/brand-register`,payload)
    } catch (e:any) {
      throw new Error(e)
    }
  };
}
