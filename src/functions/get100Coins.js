import axios from "axios";
import { API_URL } from "../utils/api";

export const get100Coins = async () => {

  try {

    const response = await axios.get(
      `${API_URL}/api/coingecko/coins/markets`,
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );

    if (!Array.isArray(response.data)) {
      console.log("Invalid coins response");
      return [];
    }

    return response.data;

  } catch (error) {

    console.log("Coins fetch failed:", error);

    return []; // NEVER return null
  }
};