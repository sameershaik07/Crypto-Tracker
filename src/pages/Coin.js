import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader'
import Lists from '../components/dashboard/List'
import { setCoinObject } from '../functions/setCoinObject'
import Header from '../components/common/Header'
import CoinInfo from '../components/coins/coinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrice } from '../functions/getCoinPrice'
import LineChart from '../components/coins/LineChart'
import BasicSelect from '../components/coins/Select'
import { settingChartData } from '../functions/settingChartData'
import PriceType from '../components/coins/PriceType'

function CoinPage() {

    const { id } = useParams();
    const chartCache = {};

    const [loader, setLoader] = useState(true);
    const [chartLoader, setChartLoader] = useState(true);

    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('prices');

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    /* ===============================
       FETCH COIN INFO
    =============================== */
    useEffect(() => {
        if (!id) return;
        fetchCoinInfo();
    }, [id]);

    const fetchCoinInfo = async () => {

        setLoader(true);

        const data = await getCoinData(id);

        if (data?.id) {
            setCoinObject(setCoinData, data);
        }

        setLoader(false);
    };

    /* ===============================
       FETCH CHART DATA
    =============================== */
    useEffect(() => {

        if (!id) return;

        fetchChartData();

    }, [id, days, priceType]);

    const fetchChartData = async () => {

        const cacheKey = `${id}-${days}-${priceType}`;

        /* ===============================
           USE CACHE IF EXISTS
        =============================== */

        if (chartCache[cacheKey]) {
            settingChartData(setChartData, chartCache[cacheKey]);
            return;
        }

        setChartLoader(true);

        try {

            const prices = await getCoinPrice(id, days, priceType);

            if (Array.isArray(prices) && prices.length > 0) {

                chartCache[cacheKey] = prices; // ⭐ SAVE CACHE

                settingChartData(setChartData, prices);
            }

        } catch (err) {
            console.log("Chart fetch error:", err);
        }

        setChartLoader(false);
    };

    /* ===============================
       HANDLERS
    =============================== */

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    const handlepriceType = (event, newType) => {
        if (!newType) return;
        setPriceType(newType);
    };

    /* ===============================
       UI
    =============================== */

    return (
        <>
            <Header />

            {loader ? (
                <Loader />
            ) : (
                <div className='coin-detail'>

                    <div className='grey-wrapper'>
                        <Lists coin={coinData} />
                    </div>

                    <div className='chart-wrapper'>

                        <BasicSelect
                            days={days}
                            handleChange={handleDaysChange}
                        />

                        <PriceType
                            priceType={priceType}
                            handlepriceType={handlepriceType}
                        />

                        {chartLoader ? (
                            <Loader />
                        ) : (
                            <LineChart
                                chartData={chartData}
                                priceType={priceType}
                                multiAxis={false}
                            />
                        )}

                    </div>

                    <CoinInfo coinData={coinData} />

                </div>
            )}
        </>
    );
}

export default CoinPage;