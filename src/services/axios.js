import axios from "axios";

class AxiosService {
  constructor(axios) {
    this._axios = axios;
  }
  async get(url, params) {
    return await this._axios.get(url, { params });
  }
  //Other HTTP methods can be implemented as needed
}
const axiosInstance = axios.create();
const axiosService = new AxiosService(axiosInstance);
export default axiosService;
