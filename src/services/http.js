import axiosService from "./axios";

class HTTPService {
  constructor(client) {
    this._client = client;
  }
  async get(url, params) {
    return await this._client.get(url, params);
  }
  //Other HTTP methods can be implemented as needed
}


const httpService = new HTTPService(axiosService);
export default httpService;
