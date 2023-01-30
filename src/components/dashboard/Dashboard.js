import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Navbar from './Navbar'
import Watchlist from './Watchlist.js'
import DashboardFrame from './DashboardFrame'
import { Container, Box } from '@mui/system'
import OrderWindow from './OrderWindow'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOrderWindowOpen } from '../../features/orderWindowState'


const Dashboard = (props) => {

  const [navHeight, setNavHeight] = useState('');

  const orderWindowState = useSelector((state) => state.orderWindow);
  const dispatch = useDispatch();

  useEffect(() => {

    const navElement = document.getElementById('navbar_main_container');
    const contentContainer = document.getElementById('main_content_container');
    contentContainer.style.marginTop = navElement.offsetHeight + 'px'
  }, [])

  useEffect(() => {

  }, [orderWindowState])

  return (
    <>

      <Navbar sx={{ zIndex: 100 }} />

      <div id='main_content_container' style={{
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'hidden',
        marginLeft: '2rem',
        marginRight: '2rem',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.08)',
        minHeight: '91vh',
      }}>

        <div style={{
          width: '28.6vw',
          maxHeight: '91vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'fixed',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}>

          <div style={{
            border: '1px solid #e4e4e4',
            borderTop: 'none',
            overflowY: 'scroll',
            flex: 1,
          }} className="watchlist_main">


            <Watchlist />
          </div>


          {/* Bottom Box */}
          <Box sx={{
            height: '3rem',
            width: '100%',
            backgroundColor: 'grey.main',
            position: 'relative',
            bottom: '0'
          }}>


          </Box>


        </div>

        <div className="dashboard_frame_main" style={{
          marginLeft: '30%',
          width: '70vw'
        }}>
          <DashboardFrame />



        </div>
          <OrderWindow state={orderWindowState} handleClose={() => dispatch(toggleOrderWindowOpen())} handleClickOpen={() => dispatch(toggleOrderWindowOpen())} />
      </div>
    </>
  )
}

export default Dashboard