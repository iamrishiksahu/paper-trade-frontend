import React, { useState } from 'react'
import { Typography, Divider, IconButton, Button, Box } from '@mui/material'
import { AddBoxOutlined, IndeterminateCheckBoxOutlined, InsertChart, DeleteTwoTone } from '@mui/icons-material'
import { useEffect } from 'react'
import './watchListItem.css'
import { useSelector, useDispatch } from 'react-redux'

import { scriptChange } from '../../../features/overview/chartFeatures'
import { toggleOrderWindowOpen } from '../../../features/orderWindowState'
import { useNavigate } from 'react-router-dom'
import { host_url } from '../../../app/constants'

const HoverToolbar = (props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleItemIconClicked = (action, e) => {
        e.preventDefault();
        console.log(props.item)

        switch (action) {


            case 'BUY':
                dispatch(toggleOrderWindowOpen({ transactionType: 'BUY', scriptName: props.item.scriptName, ltp: props.item.ltp, exchange: props.item.exchange }))
                break;
            case 'SELL':
                dispatch(toggleOrderWindowOpen({ transactionType: 'SELL', scriptName: props.item.scriptName, ltp: props.item.ltp, exchange: props.item.exchange }))
                break;
            case 'CHART':
                if((host_url + 'dashboard') != window.location.href){
                    navigate('/dashboard')
                }
                dispatch(scriptChange({ symbol: props.item.scriptName, exchange: 'BSE' }))
                break;
            case 'DELETE':
                alert(`Deleting ${props.item.symbol}`)
                break;
            default:
                break;
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'right', width: '23rem', marginTop: '-2.25rem', }}>
            <IconButton color="blue" aria-label="buy quantity" onClick={(e) => handleItemIconClicked('BUY', e)}>
                <AddBoxOutlined />
            </IconButton>
            <IconButton color="red" aria-label="sell quantity" onClick={(e) => handleItemIconClicked('SELL', e)}>
                <IndeterminateCheckBoxOutlined />
            </IconButton>
            <IconButton color="blue" aria-label="chart" onClick={(e) => {
                handleItemIconClicked('CHART', e);
            }}>
                <InsertChart />
            </IconButton>
            <IconButton color="black" aria-label="chart" onClick={(e) => handleItemIconClicked('DELETE', e)}>
                <DeleteTwoTone />
            </IconButton>
        </div>
    )
}

const WatchListItem = (props) => {


    const [isHovering, setIsHovering] = useState(false);



    const handleHover = () => {
        setIsHovering(prev => !prev);
    }
    useEffect(() => {

    }, [isHovering])

    return (
        <div key={props.idx} className={'wathlist-item-container'}
            style={{ maxHeight: '2.5rem' }}
            onMouseOver={handleHover} onMouseOut={handleHover}>


            <Box sx={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '16px', paddingLeft: '16px', paddingRight: '16px', display: 'flex', justifyContent: 'space-between' }} >

                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>

                    <Typography >{props.stock.scriptName}</Typography>
                    <Typography sx={{ fontSize: '0.75rem' }} >{props.stock.exchange}</Typography>
                </Box>
                <Typography>{props.stock.ltp}</Typography>
            </Box>

            {isHovering && <HoverToolbar item={props.stock} />}


            <Divider />


        </div>
    )
}

export default WatchListItem