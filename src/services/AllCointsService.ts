import apiClient from "../api/ApiClient";
import { CointApiResponse } from "../types/coint";

const cointsPath = "/tickers";

export const getCoints = async (): Promise<CointApiResponse> => {
  try {
    const response = await apiClient().get<CointApiResponse>(cointsPath);
    return response.data;
  } catch (error) {
    console.error("Error fetching coins:", error);
    throw error;
  }
};
