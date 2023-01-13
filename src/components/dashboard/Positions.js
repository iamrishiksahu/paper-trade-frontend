import { Button } from '@mui/material';
import React from 'react'
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken'

const Positions = () => {

  const refresh = useRefreshToken();

  const {auth} = useAuth();

  const refr = () => {

    console.log(auth)

    refresh()
  }
  return (
    <div>

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
    </div>
  )
}

export default Positions