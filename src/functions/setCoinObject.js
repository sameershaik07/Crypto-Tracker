export const setCoinObject=(usestate, data)=>{
    console.log(data)
    const coinData ={
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        image: data.image.large,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
        total_volume: data.market_data.total_volume.usd,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        description:data.description.en
    
        
    }
    usestate(coinData)

}