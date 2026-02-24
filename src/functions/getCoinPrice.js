import axios from "axios";

export const getCoinPrice = (id, days,priceType) => {
    const price=axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=4`)
        .then((res) => {
            console.log(res.data)
           return res.data[priceType]
        })
        .catch((err) => {
            console.log("Error ", err)
            
        })

    return price;
}