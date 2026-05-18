import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import TabsComponent from '../components/dashboard/Tabs'
import Loader from '../components/common/Loader'
import Search from '../components/dashboard/Search'
import PaginationComponent from '../components/dashboard/Pagination'
import ScrollTop from '../components/common/ScrollTop'
import { get100Coins } from '../functions/get100Coins'

function DashboardPage() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    /* ===============================
       FETCH DATA ONLY ONCE
    =============================== */
    useEffect(() => {
        fetchCoins();
    }, []);

    const fetchCoins = async () => {
        const data = await get100Coins();

        if (data?.length) {
            setCoins(data);
        }

        setLoader(false);
    };

    /* ===============================
       SEARCH HANDLER
    =============================== */
    const onSearchClick = (e) => {
        setSearch(e.target.value);
        setPage(1); // reset pagination on search
    };

    /* ===============================
       FILTERED COINS (MEMOIZED)
    =============================== */
    const filteredCoins = useMemo(() => {
        return coins.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
        );
    }, [coins, search]);

    /* ===============================
       PAGINATION (MEMOIZED)
    =============================== */
    const paginatedCoins = useMemo(() => {
        const start = (page - 1) * 10;
        return filteredCoins.slice(start, start + 10);
    }, [filteredCoins, page]);

    /* ===============================
       PAGE CHANGE
    =============================== */
    const handleChange = (event, value) => {
        setPage(value);
    };

    /* ===============================
       UI
    =============================== */
    return (
        <>
            <Header />
            <ScrollTop />

            {loader ? (
                <Loader />
            ) : (
                <div style={{ color: 'white' }}>

                    <Search
                        search={search}
                        onSearchClick={onSearchClick}
                    />

                    <TabsComponent coins={paginatedCoins} />

                    {!search && (
                        <PaginationComponent
                            page={page}
                            handlePage={handleChange}
                        />
                    )}

                </div>
            )}

            <Footer />
        </>
    );
}

export default DashboardPage;