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


function ComparePage() {
    const [days, setDays] = useState(30);
    const [loader, setLoader] = useState(true);
    const [crypto1, setCrypto1] = useState('bitcoin');
    const [crypto2, setCrypto2] = useState('ethereum');
    const [coinData1, setCoinData1] = useState({});
    const [coinData2, setCoinData2] = useState({});
    const [allCoins, setAllCoins] = useState([]);
    const [chartData, setChartData] = useState()

    useEffect(() => {

        getCoin();

    }, [])

    async function getCoin() {
        const data = await get100Coins();
        if (data) {
            setAllCoins(data);
            const data1 = await getCoinData(crypto1);
            const data2 = await getCoinData(crypto2);
            if (data1 && data2) {
                setCoinObject(setCoinData1, data1);
                setCoinObject(setCoinData2, data2);
                console.log("Compare :", coinData1, coinData2);
                const prices1 = await getCoinPrice(crypto1, days, "prices");
                const prices2 = await getCoinPrice(crypto2, days, "prices");
                if (prices1.length>0 && prices2.length>0) {
                    console.log(prices1);
                    settingChartData(setChartData, prices1);
                    setLoader(false);
                }
            }
        }
    }



    const handleChange = (e) => {
        setDays(e.target.value);
        setLoader(false);
    }

    const handleCoinChange = async (event, isCoin2) => {
        setLoader(true);
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data = await getCoinData(event.target.value);
            console.log(data)
            if (data) {

                setCoinObject(setCoinData2, data);
            }
        }
        else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);
            if (data) {

                setCoinObject(setCoinData1, data);
            }

        }
        const prices1 = await getCoinPrice(crypto1, days, "prices");
        const prices2 = await getCoinPrice(crypto2, days, "prices");
        if (prices1 && prices2) {
            console.log(prices1);
            settingChartData(setChartData, prices1);
            setLoader(false);
        }

    };

    return (
        <div>
            <Header />


            {
                loader ? <Loader /> :
                    <div className='compare-container'>

                        <div className='compareSelect'>
                            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleChange={handleCoinChange} allCoins={allCoins} />
                            <BasicSelect days={days} handleChange={handleChange} notP={true} />
                        </div>


                        <div className='l1'>
                            <Lists coin={coinData1} />
                        </div>
                        <div className='l2'>
                            <Lists coin={coinData2} />
                        </div>
                        <div>
                            <LineChart chartData={chartData} priceType={"prices"} />
                        </div>
                    </div>

            }

        </div>
    )
}

export default ComparePage