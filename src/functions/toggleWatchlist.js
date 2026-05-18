import { getWatchlist } from "./getWatchlist";
import { Bounce, toast } from 'react-toastify';
export const toggleWatchlist = (coinId) => {
  let list = getWatchlist();

  if (list.includes(coinId)) {
    toast.success(`${coinId.toUpperCase()} removed from watchlist`, );
    list = list.filter(id => id != coinId);
  } else {
    toast.success(`${coinId.toUpperCase()} added to watchlist`, );
    list.push(coinId);
  }

  localStorage.setItem("watchlist", JSON.stringify(list));
  return list;
};