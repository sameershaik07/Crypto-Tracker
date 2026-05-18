import { useState } from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNum } from '../../../functions/converNum';
import { motion } from "framer-motion";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { isInWatchlist } from '../../../functions/isInWatchlist';
import { toggleWatchlist } from '../../../functions/toggleWatchlist';

function Lists({ coin, className = "" }) {
    const [watchlist, setWatchlist] = useState(
        isInWatchlist(coin.id)
    );

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWatchlist(coin.id);
        setWatchlist(isInWatchlist(coin.id));
    }

    return (
        <motion.tr className={`list ${className}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .3 }}
        >
            <Tooltip title="Logo" placement='bottom-start'>

                <td className='td-img'>
                    <img className='coin-logo td-logo' src={coin.image} alt='img' />
                </td>
            </Tooltip>
            <td className='coin-info'>
                <Tooltip title="Symbol" placement='bottom-start'>

                    <p className='coin-sym td-sym'>{coin.symbol}</p>
                </Tooltip>

                <Tooltip title="Name" placement='bottom-start'>

                    <p className='coin-name td-name'>{coin.name}</p>
                </Tooltip>

            </td>

            {coin.price_change_percentage_24h >= 0 ?
                (
                    <Tooltip title="Price Change" placement='bottom-start'>

                        <td className='chip-flex td-flex'>
                            <p className='price-change td-price'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            <div className='icon-chip td-icon td-show'>
                                <TrendingUpRoundedIcon />

                            </div>
                            <div className='icon-chip td-icon td-arrow'>
                                <TrendingUpRoundedIcon fontSize='small' />

                            </div>


                        </td>
                    </Tooltip>

                ) :
                (
                    <Tooltip title="Price Change" placement='bottom-start'>

                        <td className='chip-flex td-flex'>
                            <p className='price-change td-price red-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</p>

                            <div className='icon-chip td-icon red td-show'>
                                <TrendingDownRoundedIcon />
                            </div>
                            <div className='icon-chip td-icon red td-arrow'>
                                <TrendingDownRoundedIcon fontSize='small' />
                            </div>


                        </td>
                    </Tooltip>
                )

            }
            <td className='info-container td-center'>
                <Tooltip title=" Current Price"  >

                    <h3 className='coin-price td-coin-price' style={{
                        color: coin.price_change_percentage_24h >= 0 ? "var(--green)" : "var(--red)"

                    }}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </Tooltip>
            </td>
            <Tooltip title="Total Volume" placement='bottom-start'>

                <td className='list-coin-market'>
                    <p className=' td-dkt'>${coin.total_volume.toLocaleString()}</p>
                    <p className='td-mbl'>${convertNum(coin.total_volume)}</p>
                </td>

            </Tooltip>

            <Tooltip title="Market Cap" placement='bottom-start'>

                <td>
                    <p className=' td-dkt'>${coin.market_cap.toLocaleString()}</p>
                    <p className='td-mbl' >${convertNum(coin.market_cap)}</p>
                </td>

            </Tooltip>

            {coin.price_change_percentage_24h >= 0 ?
                (
                    <Tooltip title="Watchlist" placement='bottom'>

                        <td className='watch-td'>
                            {(!watchlist) ?
                                <div className='list-watch ' onClick={toggle}>
                                    <StarOutlineRoundedIcon fontSize='large' />
                                </div> :
                                <div className='list-watch' onClick={toggle}>
                                    <StarRoundedIcon fontSize='large' />
                                </div>
                            }
                        </td>
                    </Tooltip>
                ) :
                (

                    <Tooltip title="Watchlist" placement='bottom'>

                        <td className='watch-td'>
                            {(!watchlist) ?
                                <div className='list-watch red-watch ' onClick={toggle}>
                                    <StarOutlineRoundedIcon fontSize='large' />
                                </div> :
                                <div className='list-watch red-watch' onClick={toggle}>
                                    <StarRoundedIcon fontSize='large' />
                                </div>
                            }
                        </td>
                    </Tooltip>

                )
            }


        </motion.tr>
    )
}

export default Lists