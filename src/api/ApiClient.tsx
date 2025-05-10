import axios, { AxiosError, AxiosHeaderValue, AxiosRequestConfig } from "axios";
import { constants } from "../utils/Constants";

export interface ApiHeaders {
  [key: string]: AxiosHeaderValue;
}

const apiClient = (
  dynamicBaseURL: string = "https://api.coinlore.net/api",
  headers?: ApiHeaders
) => {
  const defaultHeaders: AxiosRequestConfig["headers"] = {
    Accept: constants.headersClient[0].accept,
  };

  if (headers) {
    Object.assign(defaultHeaders, headers);
  }

  const axiosInstance = axios.create({
    baseURL: dynamicBaseURL,
    headers: defaultHeaders,
    withCredentials: true,
  });
  return axiosInstance;
};

export const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError !== undefined;
};

export default apiClient;
