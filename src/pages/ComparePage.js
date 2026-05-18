import { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import SelectCoins from '../components/coins/ComparePage/SelectCoins'
import BasicSelect from '../components/coins/Select'
import Loader from '../components/common/Loader'
import { get100Coins } from '../functions/get100Coins'
import Lists from '../components/dashboard/List'
import { getCoinData } from '../functions/getCoinData'
import { setCoinObject } from '../functions/setCoinObject'
import { getCoinPrice } from '../functions/getCoinPrice'
import { settingChartData } from '../functions/settingChartData'
import LineChart from '../components/coins/LineChart'
import CoinInfo from '../components/coins/coinInfo'
import PriceType from '../components/coins/PriceType'

function ComparePage() {

    const [days, setDays] = useState(30);
    const [loader, setLoader] = useState(true);

    const [crypto1, setCrypto1] = useState('bitcoin');
    const [crypto2, setCrypto2] = useState('ethereum');

    const [coinData1, setCoinData1] = useState({});
    const [coinData2, setCoinData2] = useState({});
    const [allCoins, setAllCoins] = useState([]);

    const [chartData, setChartData] = useState();
    const [priceType, setPriceType]  = useState('prices');

    /* ===============================
       LOAD COINS LIST ONLY ONCE
    =============================== */
    useEffect(() => {
        loadCoins();
    }, []);

    const loadCoins = async () => {
        const data = await get100Coins();
        if (data && data.length) {
            setAllCoins(data);
        }
    };

    /* ===============================
       FETCH COMPARE DATA WHEN CHANGE
    =============================== */
    useEffect(() => {
        fetchCompareData();
    }, [crypto1, crypto2, days, priceType]);

    const fetchCompareData = async () => {

        setLoader(true);

        try {

            /* ---------- Coin Details ---------- */
            const [data1, data2] = await Promise.all([
                getCoinData(crypto1),
                getCoinData(crypto2)
            ]);

            if (data1 && data2) {
                setCoinObject(setCoinData1, data1);
                setCoinObject(setCoinData2, data2);
                console.log(data1, data2);
            }

            /* ---------- Chart Prices ---------- */
            const [prices1, prices2] = await Promise.all([
                getCoinPrice(crypto1, days, priceType),
                getCoinPrice(crypto2, days, priceType)
            ]);

            if (
                Array.isArray(prices1) &&
                Array.isArray(prices2) &&
                prices1.length > 0 &&
                prices2.length > 0
            ) {
                // using first coin for chart (your current logic)
                settingChartData(setChartData, prices1,prices2,crypto1,crypto2);
            }

        } catch (error) {
            console.log("Compare Fetch Error:", error);
        }

        setLoader(false);
    };

    /* ===============================
       HANDLERS (NO API CALLS HERE)
    =============================== */

    const handleChange = (e) => {
        setDays(e.target.value);
    };

    const handleCoinChange = (event, isCoin2) => {

        if (isCoin2) {
            setCrypto2(event.target.value);
        } else if (!isCoin2) {
            setCrypto1(event.target.value);
        }
    };

    const handlepriceType = (event, newType) => {
        if (!newType) return;
        setPriceType(newType);
    };

    /* ===============================
       UI
    =============================== */

    return (
        <div>
            <Header />

            {loader ? (
                <Loader />
            ) : (
                <div className='compare-container'>

                    <div className='compareSelect'>
                        <SelectCoins
                            crypto1={crypto1}
                            crypto2={crypto2}
                            handleChange={handleCoinChange}
                            allCoins={allCoins}
                        />

                        <BasicSelect
                            days={days}
                            handleChange={handleChange}
                            notP={true}
                        />
                    </div>

                    <div className='grey-wrapper'>
                        <Lists className='' key={coinData1.id} coin={coinData1} />
                    </div>

                    <div className='grey-wrapper'>
                        <Lists className=''key={coinData2.id} coin={coinData2} />
                    </div>

                    <div className='chart-wrapper'>
                        <PriceType
                            priceType={priceType}
                            handlepriceType={handlepriceType}
                        />
                        <LineChart

                            chartData={chartData}
                            priceType={priceType}
                            multiAxis={true}
                        />
                    </div>

                    <CoinInfo coinData={coinData1} />
                    <CoinInfo coinData={coinData2} />

                </div>
            )}
        </div>
    );
}

export default ComparePage;