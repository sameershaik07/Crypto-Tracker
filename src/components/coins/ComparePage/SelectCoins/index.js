import { useEffect, useState } from 'react'
import { get100Coins } from '../../../../functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import "./styles.css"
function SelectCoins({ crypto1, crypto2, handleChange, allCoins }) {





    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },

    }





    return (
        <div className='select-flex'>
            <p>Crypto 1 </p>
            <Select className='sel'
                value={crypto1}
                label="Coin"
                onChange={(e) => handleChange(e, false)}

                sx={styles}
            >
                {allCoins.filter((item) => item.id != crypto2).map((coin) =>
                    (<MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>)
                )}

            </Select>

            <p>Crypto 2 </p>
            <Select className='sel'
                value={crypto2}
                label="Coin"
                onChange={(e) => handleChange(e, true)}

                sx={styles}
            >
                {allCoins.filter((item) => item.id != crypto1).map((coin1) =>
                    (<MenuItem key={coin1.id} value={coin1.id}>{coin1.name}</MenuItem>)
                )}

            </Select>
        </div>
    );
}

export default SelectCoins