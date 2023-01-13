import React from 'react'
import {Button, Typography } from '@mui/material'
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';


const Landing = () => {

  
  const refresh = useRefreshToken();

  const {auth} = useAuth();

  const refr = () => {

    console.log(auth)

    refresh()
  }
  return (
    <>

<Button variant='contained' sx={{
        backgroundColor: '#ff5727',
        width: '224px',
        boxShadow: '0px 0px 0px',
        textTransform: 'none',
        marginBottom: '16px',
        ":hover": {
          backgroundColor: '#ff792e',
          boxShadow: '0px 0px 0px',
        }
      }}

        onClick={() => refr()}
        type='button'

      >
        Refresh
      </Button>
    <Typography align='center' variant='h2'>

        This is a landing page
    </Typography>
    
    </>
  )
}

export default Landing