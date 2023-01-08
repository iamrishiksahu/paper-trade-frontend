import React, { useState } from 'react'
import ChartFragment from './ChartFragment'

const Overview = (props) => {

    const [symbol, setSymbol] = useState(props.symbol);

    return (
        <>       
            <ChartFragment exhange={'BSE'} symbol={props.symbol} />
        </>
    )
}

export default Overview