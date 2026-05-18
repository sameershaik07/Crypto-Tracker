// import axios from "axios"

// export const get100Coins = () => {
//     const myCoins = axios
//         .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=100")
//         .then((res) => {
            
//             return res.data
//         })
//         .catch((err) => {
//             console.log("Error ", err)
           
//         })
//     return myCoins
// }

import axios from "axios";

export const get100Coins = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/coingecko/coins/markets",
      {
        params: {
          vs_currency: "usd",
          per_page: 100,
          page: 1,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};