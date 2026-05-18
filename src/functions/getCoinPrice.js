// import axios from "axios";

// export const getCoinPrice =async (id, days,priceType) => {
//     const price=axios
//         .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=4`)
//         .then((res) => {
//             console.log(res.data)
//            return res.data[priceType]
//         })
//         .catch((err) => {
//             console.log("Error ", err)
            
//         })

//     return price;
// }

// import axios from "axios";

// export const getCoinPrice = async (id, days, priceType) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/api/coingecko/coins/${id}/market_chart`,
//       {
//         params: {
//           vs_currency: "usd",
//           days: days,
//         },
//       }
//     );

//     return response.data[priceType];
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

import axios from "axios";
import { API_URL } from "../utils/api";

export const getCoinPrice = async (id, days, priceType) => {
  try {
    
    const response = await axios.get(
      `${API_URL}/api/coingecko/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          interval: "daily",
          days: days,
        },
      }
    );
    console.log(response.data)

    if (!response.data || !response.data[priceType]) {
      return [];
    }

    return response.data[priceType];

  } catch (error) {
    console.log("Price API safe fallback");
    return []; // NEVER throw
  }
};