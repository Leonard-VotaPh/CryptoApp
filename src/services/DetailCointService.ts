import { CoinDetail, Market } from "@/src/types/coint";

interface DetailResponse {
  status: number;
  data: CoinDetail[];
  success: boolean;
}

interface MarketsResponse {
  status: number;
  data: Market[];
  success: boolean;
}

export const getDetailCoint = async (id: string): Promise<DetailResponse> => {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/ticker/?id=${id}`
    );
    const data = await response.json();
    return {
      status: response.status,
      data,
      success: response.ok,
    };
  } catch (error) {
    console.error("Error fetching coin detail:", error);
    throw error;
  }
};

export const getMarkets = async (id: string): Promise<MarketsResponse> => {
  try {
    const response = await fetch(
      `https://api.coinlore.net/api/coin/markets/?id=${id}`
    );
    const data = await response.json();
    return {
      status: response.status,
      data,
      success: response.ok,
    };
  } catch (error) {
    console.error("Error fetching markets:", error);
    throw error;
  }
};
