import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import TabsComponent from '../components/dashboard/Tabs'
import Loader from '../components/common/Loader'
import axios from "axios"
import Search from '../components/dashboard/Search'
import PaginationComponent from '../components/dashboard/Pagination'
import ScrollTop from '../components/common/ScrollTop'
import { get100Coins } from '../functions/get100Coins'

function DashboardPage() {

    const [coins, setCoins] = useState([]);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    const handleChange = (event, value) => {
        setPage(value);
        let index = (value - 1) * 10;
        setPaginatedCoins(coins.slice(index, index + 10));
    };

    const onSearchClick = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    let filterCoins = coins.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
        || item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await get100Coins();
        if (data) {
            setCoins(data)
            setPaginatedCoins(data.slice(0, 10))
            setLoader(false)
        }
    }

    


    return (
        <>
            <Header />
            <ScrollTop />
            {loader ? <Loader /> :
                (
                    <div style={{ color: 'white' }}>

                        <Search search={search} onSearchClick={onSearchClick} />
                        <TabsComponent coins={search ? filterCoins : paginatedCoins} />
                        {!search && <PaginationComponent page={page} handlePage={handleChange} />}
                    </div>)
            }
            <Footer />
        </>
    )
}

export default DashboardPage