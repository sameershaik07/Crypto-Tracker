// import axios from "axios"

// export const getCoinData =async (id) => {
//     const data = axios
//         .get(`http://localhost:5000/api/coingecko/coins/${id}`)
//         .then((res) => {
//            console.log(res.data)
//             return res.data
            
//         })
//         .catch((err) => {
//             console.log("Error ", err)
//             return []
          
//         })
//         return data;
// }

import axios from "axios";
import { API_URL } from "../utils/api";

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/coingecko/coins/${id}`
    );
    if(!response.data) return;
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};