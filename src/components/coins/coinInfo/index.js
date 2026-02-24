import React, { useState } from 'react'
import "./style.css"


function CoinInfo({ coinData }) {

    const [flag, setFlag] = useState(false);

    const short = coinData.description.slice(0, 300) + " <span style=' color: var(--grey)'>Read more...</span>";
    const desc = coinData.description + " <span style=' color: var(--grey)'>Read less...</span>";





    return (
        <div className='coin-bio'>
            <h2>{coinData.name}</h2>
            {
                coinData.description.length > 300 ?
                    <p onClick={() => setFlag(!flag)} dangerouslySetInnerHTML={{ __html: !flag ? short : desc }}></p>
                    :
                    <p dangerouslySetInnerHTML={{ __html: coinData.description }}></p>
            }
        </div>
    )
}

export default CoinInfo 