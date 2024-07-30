import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL = "http://hawkingbros.somee.com/publish/api/";

class ApiInstanse {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
    return response.data;
  }

  async post<T>(endpoint: string, data: any = {}, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.post(endpoint, data, options);
    return response.data;
  }

  async delete<T>(endpoint: string, data: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.delete(endpoint, { data });
    return response.data;
  }
}

export const apiInstanse = new ApiInstanse();
