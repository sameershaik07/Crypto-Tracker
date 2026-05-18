import React, { useState } from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { delay, motion } from "framer-motion"
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { isInWatchlist } from '../../../functions/isInWatchlist';
import { toggleWatchlist } from '../../../functions/toggleWatchlist';
function Grid({ coin }) {
    
    const [watchlist, setWatchlist] = useState(
        isInWatchlist(coin.id)
    );
    if (!coin) return null;


    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const updatedList =toggleWatchlist(coin.id);
        setWatchlist(updatedList.includes(coin.id));
    }
    return (
        
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .3 }}
            className={`grid  ${coin.price_change_percentage_24h < 0 && "grid-red"}`}>
            <div className='info-flex'>
                <img className='coin-logo' src={coin.image} alt={coin.name} />
                <div className='coin-info'>
                    <p className='coin-sym'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>

            {coin.price_change_percentage_24h >= 0 ?
                (
                    <div className='grid-dynamic'>

                        <div className='chip-flex'>
                            <p className='price-change'>{coin?.price_change_percentage_24h?.toFixed(2)}%</p>
                            <div className='icon-chip'>
                                <TrendingUpRoundedIcon />
                            </div>
                        </div>
                        {(!watchlist) ?
                            <div className='grid-watch ' onClick={toggle}>
                                <StarOutlineRoundedIcon fontSize='large' />
                            </div> :
                            <div className='grid-watch' onClick={toggle}>
                                <StarRoundedIcon fontSize='large' />
                            </div>
                        }

                    </div>

                ) :
                (<div className='grid-dynamic '>

                    <div className='chip-flex '>
                        <p className='price-change red-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                        <div className='icon-chip red'>
                            <TrendingDownRoundedIcon />
                        </div>
                    </div>
                    {(!watchlist) ?
                        <div className='grid-watch red-watch' onClick={toggle}>
                            <StarOutlineRoundedIcon fontSize='large' />
                        </div> :
                        <div className='grid-watch  red-watch' onClick={toggle}>
                            <StarRoundedIcon fontSize='large' />
                        </div>
                    }
                </div>
                )

            }
            <div className='info-container'>

                <h3 className='coin-price' style={{
                    color: coin.price_change_percentage_24h >= 0 ? "var(--green)" : "var(--red)"

                }}>
                    ${coin.current_price.toLocaleString()}
                </h3>
                <div className='coin-mark'>
                    <p>Total volume : ${coin.total_volume.toLocaleString()}</p>
                    <p>Market cap : ${coin.market_cap.toLocaleString()}</p>
                </div>
            </div>





        </motion.div>
    );
}

export default Grid;