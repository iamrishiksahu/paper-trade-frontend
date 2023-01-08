import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardFrame = (props) => {
  return (
    <Outlet symbol={props.symbol}/>
  )
}

export default DashboardFrame