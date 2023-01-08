import { Divider, Typography } from '@mui/material'
import React from 'react'

const listOfStocks = [
    {
        symbol: 'MAINFRA',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },

    {
        symbol: 'MARUTI',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'TATAMOTORS',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'TATASTEEL',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SBIN',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'NSE',
        dayPercent: 0.33,

    },
]




const Watchlist = (props) => {
    return (
        <>

            {listOfStocks.map(stock => (
                <>

                    <Typography
                    onClick={(e)=>props.changeScript(e,stock)}
                    sx={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '16px', paddingLeft: '16px', paddingRight: '16px', }} >


                        {stock.symbol + '\t\t' + stock.exhange + '\t' + stock.ltp}

                    </Typography>
                    <Divider />

                </>
            ))}



        </>
    )
}

export default Watchlist