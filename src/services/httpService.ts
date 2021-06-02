import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { apiUrl } from "./../config.json";

export class HttpService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: apiUrl,
      headers: {},
    });
  }
  get(url: string, config: AxiosRequestConfig) {
    return this.client.get(url, config);
  }
}
