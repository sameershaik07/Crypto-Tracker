import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/common/Header'
import TabsComponent from '../components/dashboard/Tabs'
import Search from '../components/dashboard/Search'
import { get100Coins } from '../functions/get100Coins';
import NoList from '../components/Watchlist/NoList';




function Watchlist() {
    let data = [];
    data = JSON.parse(localStorage.getItem("watchlist"));
    const [totCoins, setTotCoins] = useState([])
    const [watchlistCoins, setWatchlistCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchCoins();
    }, [])

    const onSearchClick = (e) => {
        setSearch(e.target.value);
    }

    const fetchCoins = async () => {

        let coins = await get100Coins();
        setTotCoins(coins);
        if (coins) {
            let watchCoins = coins.filter((coin) => {
                return data.includes(coin.id);
            })
            setWatchlistCoins(watchCoins);
        }
    }

    const filteredCoins = useMemo(() => {
        return watchlistCoins.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
        );
    }, [watchlistCoins, search]);



    return (


        <div>
            < Header />
            {watchlistCoins.length > 0 && <Search search={search} onSearchClick={onSearchClick} />}
            {(watchlistCoins.length > 0) ?

                <TabsComponent coins={search ? filteredCoins : watchlistCoins} /> :

                <NoList/>


            }
        </div>

    )
}

export default Watchlist