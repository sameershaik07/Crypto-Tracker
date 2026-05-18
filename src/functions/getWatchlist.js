export const getWatchlist = () => {
  const data = localStorage.getItem("watchlist");
  return data ? JSON.parse(data) : [];
};
