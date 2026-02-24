import React, { useState } from 'react'
import "./style.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function Search({search, onSearchClick}) {
    
    return (



        <div className='search-flex'>
            <SearchRoundedIcon />
            <input className='input' placeholder='Search' value={search} onChange={(e)=>onSearchClick(e)} />
        </div>
    )
}

export default Search