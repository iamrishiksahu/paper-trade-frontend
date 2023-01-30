import { Divider, Typography, Container, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import WatchListItem from './watchlist/WatchListItem'

const listOfStocks = [
    {
        symbol: 'MAINFRA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'MARUTI',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'TATAMOTORS',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'TATASTEEL',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SBIN',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        symbol: 'ADANIPOWER',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'BAJFINANCE',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
    {
        symbol: 'SUNPHARMA',
        ltp: 300.45,
        exhange: 'BSE',
        dayPercent: 0.33,

    },
]


const Watchlist = (props) => {


    const [isHovering, setIsHovering] = useState(false);




    const handleHover = () => {
        setIsHovering(prev => !prev);
    }



    return (
        <>
            <Container  >



                {listOfStocks?.map((stock, idx) => (
                    <WatchListItem stock={stock} idx={idx} />
                ))}


            </Container>






        </>
    )
}

export default Watchlist