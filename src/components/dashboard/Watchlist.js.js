import { Divider, Typography, Container, Box, TextField, InputBase, Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWatchlist } from '../../features/watchlist/watchlistState'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import WatchListItem from './watchlist/WatchListItem'
import SearchIcon from '@mui/icons-material/Search';
import API from '../../features/marketData/service/marketApi'

const listOfStocks = [
    {
        scriptName: 'MAINFRA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'MARUTI',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'TATAMOTORS',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'TATASTEEL',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SBIN',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    }, ,
    {
        scriptName: 'ADANIPOWER',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'BAJFINANCE',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
    {
        scriptName: 'SUNPHARMA',
        ltp: 300.45,
        exchange: 'BSE',
        dayPercent: 0.33,

    },
]


const Watchlist = (props) => {


    const [isHovering, setIsHovering] = useState(false);
    const dispatch = useDispatch();
    const axios = useAxiosPrivate();

    const watchlistData = useSelector((store) => store.watchListData);
    // const watchlistData = listOfStocks;

    const fetchWatchlist = async () => {
        try {
            const response = await axios.get('/user/watchlist');
            dispatch(setWatchlist(response.data.watchlist))
        } catch (err) {
            console.error(err);
        }

    }


    const handleHover = () => {
        setIsHovering(prev => !prev);
    }

    useEffect(() => {

        fetchWatchlist();
    }, [])


    return (
        <>
            <Box sx={{padding: 0}} >



                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem', paddingY: '0.25rem' }} >
                    <SearchIcon color='grey' sx={{ maxWidth: '1rem', paddingLeft:'0.75rem' }} />
                    <InputBase

                        placeholder='Search BSE stocks here!' />
                </Box>

                <Divider />


                <Box  >
                    {

                        watchlistData.length != 0 ? watchlistData.map((stock, idx) => (
                            <WatchListItem stock={stock} idx={idx} />
                        )) : <Typography sx={{ paddingY: '4rem' }} align='center'>Add items to watchlist!</Typography>
                    }
                    <Divider color='#e4e4e4' />


                </Box>




            </Box>






        </>
    )
}

export default Watchlist