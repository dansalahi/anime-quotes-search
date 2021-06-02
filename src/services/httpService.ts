import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { apiUrl } from "./../config.json";

export class HttpService {
  constructor(private client: AxiosInstance) {
    this.client = axios.create({
      baseURL: apiUrl,
      headers: {},
    });
  }
  get(url: string, config: AxiosRequestConfig) {
    return this.client.get(url, config);
  }
}
