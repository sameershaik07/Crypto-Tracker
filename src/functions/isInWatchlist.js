import { getWatchlist } from "./getWatchlist";

export const isInWatchlist = (coinId) => {
  const list = getWatchlist();
  return list.includes(coinId);
};