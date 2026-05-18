import { useState } from 'react';
import "./style.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function PriceType({priceType, handlepriceType}) {
    

    return (
        <div className='toggle-price'>


            <ToggleButtonGroup
                value={priceType}
                exclusive
                onChange={handlepriceType}
                aria-label="text alignment"

                sx={{
                    "& .Mui-selected": {
                        
                        color: "var(--white) !important",
                    },
                    borderColor: "var(--violet)",
                    border: "unset !important",
                    "& .MuiToggleButtonGroup-grouped": {
                        border: "1px solid var(--violet)!important",
                        borderColor: "unset",
                        color: "var(--violet)  ",
                    },
                    "& .MuiToggleButton-standard": {
                        color: "var(--violet) !important",
                    },
                }}
            >

                <ToggleButton value="prices" className='toggle-btn' >
                    Price
                </ToggleButton>
                <ToggleButton value="market_caps"  className='toggle-btn'>
                    Volume
                </ToggleButton>
                <ToggleButton value="total_volumes"  className='toggle-btn'>
                    Market Cap
                </ToggleButton>

            </ToggleButtonGroup>
        </div>
    );
}
