import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/common/Loader';
import axios from 'axios';
import Lists from '../components/dashboard/List';
import { setCoinObject } from '../functions/setCoinObject';
import Header from '../components/common/Header';
import CoinInfo from '../components/coins/coinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrice } from '../functions/getCoinPrice';
import LineChart from '../components/coins/LineChart';
import { convertDate } from '../functions/convertDate';
import BasicSelect from '../components/coins/Select';
import { settingChartData } from '../functions/settingChartData';
import PriceType from '../components/coins/PriceType';


function CoinPage() {
    const { id } = useParams();
    const [loader, setLoader] = useState(true);
    const [coinData, setCoinData] = useState()
    const [days, setDays] = useState(30)
    const [chartData, setChartData] = useState({})
    const [priceType, togglepriceType] = useState('prices');


    useEffect(() => {
        if (id) {
            getData();
        }

    }, [id])


    async function getData() {
        const data = await getCoinData(id);
        if (data) {
            setCoinObject(setCoinData, data);
            const prices = await getCoinPrice(id, days, priceType);
            console.log(prices);
            if (prices && prices.length > 0) {
                console.log(prices);
                settingChartData(setChartData, prices);
                setLoader(false);
            }

        }

    }


    async function handleDaysChange(event) {
        setLoader(true);
        setDays(event.target.value);
        const prices = await getCoinPrice(id, event.target.value, priceType);

        if (prices && prices.length > 0) {
            console.log(prices);
            settingChartData(setChartData, prices);
            setLoader(false);
        }
    };

    const handlepriceType = async (event, newType) => {
        if (!newType) return;
        setLoader(true);
        togglepriceType(newType);
        const prices = await getCoinPrice(id, days, newType);

        if (prices && prices.length > 0) {
            console.log(prices);
            settingChartData(setChartData, prices);
            setLoader(false);
        }
        console.log(newType)
    };




    return (
        <>
            <Header />
            {
                loader ? <Loader /> :
                    <div className='coin-detail'>
                        <div className='grey-wrapper'>
                            <Lists coin={coinData} />
                        </div>
                        <div className='chart-wrapper'>
                            <BasicSelect days={days} handleChange={handleDaysChange} />
                            <PriceType priceType={priceType} handlepriceType={handlepriceType} />
                            <LineChart chartData={chartData} priceType={priceType} />
                        </div>

                        <div>
                            <CoinInfo coinData={coinData} />
                        </div>
                    </div>
            }
        </>

    )
}

export default CoinPage