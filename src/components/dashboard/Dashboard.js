import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Navbar from './Navbar'
import Watchlist from './Watchlist.js'
import DashboardFrame from './DashboardFrame'
import { Container } from '@mui/system'

const Dashboard = (props) => {

  return (
    <>
      <Navbar />

      <Container maxWidth='xl' sx={{ display: 'flex', flexDirection: 'row' }}>

        <div style={{ width: '30%', height: '90vh', border: '1px solid #e4e4e4', borderTop: 'none', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)', overflowY: 'auto' }} className="watchlist_main">


          <Watchlist changeScript={props.changeScript} />
        </div>

        <div className="dashboard_frame_main" style={{ width: '70%' }}>
          <DashboardFrame />

        </div>
      </Container>



    </>
  )
}

export default Dashboard