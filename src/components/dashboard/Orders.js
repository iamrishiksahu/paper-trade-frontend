import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Container, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';


const rows = [{
  instrument: 'RELIANCE',
  qty: 123,
  avgCost: 1435.6,
  ltp: 1778.8,

},
{
  instrument: 'ADANIGREEN',
  qty: 123,
  avgCost: 1235.6,
  ltp: 1155.8,

},
{
  instrument: 'TATAPOWER',
  qty: 123,
  avgCost: 1435.6,
  ltp: 1778.8,

},
{
  instrument: 'CHOLAFIN',
  qty: 123,
  avgCost: 100,
  ltp: 94.66,

}
];

const preHeadingButtons = [
  {
    title: 'Authorization',
    id: 'auth'
  },
  {
    title: 'Family',
    id: 'family'  
  },
  {
    title: 'Analytics',
    id: 'analytics'
  },
  {
    title: 'Download',
    id: 'download'
  },
]

const calcPnL = (row) => {
  const a = Math.round(((row.ltp * row.qty - row.avgCost * row.qty) * 100)) / 100;

  if (a < 0) {
    return <Typography sx={{ color: 'red.main' }}>{a}</Typography>
  } else {
    return <Typography sx={{ color: 'green.main' }}>+{a}</Typography>

  }
}

const calcDayChange = (row) => {
  const a = Math.round(((row.ltp - row.avgCost) / row.avgCost) * 10000) / 100;

  if (a < 0) {
    return <Typography sx={{ color: 'red.main' }}>{a}</Typography>
  } else {
    return <Typography sx={{ color: 'green.main' }}>+{a}</Typography>

  }
}

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex'
}))

const PreHeadingButtons = styled(Button)(({ theme }) => ({

  color: theme.palette.blue.main,
  fontSize: '.75rem',
  textTransform: 'none',

}));

const renderPreHeadingButtons = () => {

  return (
    preHeadingButtons.map((item) => (

      <PreHeadingButtons key={item.id} variant='text'>{item.title}</PreHeadingButtons>
    ))
  )
}

const Orders = () => {


  const [currentValue, setCurrentValue] = useState(0);
  const [totalPnL, setTotalPnL] = useState(0);

  const [funds, setFunds] = useState({});
  const axiosPrivate = useAxiosPrivate();



  

  return (

    <Container sx={{ padding: '2rem', display: 'flex', gap: '2rem', flexDirection: 'column' }}>

      <FlexBox>

        <FlexBox sx={{ justifyContent: 'flex-start', width: '50%', }}>
          <Typography variant='h5'>Orders ({rows.length})</Typography>


        </FlexBox>
        <FlexBox sx={{ justifyContent: 'flex-end', width: '50%', alignItems: 'flex-start' }}>


          {renderPreHeadingButtons()}
        </FlexBox>

      </FlexBox>



      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Created on</TableCell>
              <TableCell align="right">Instrument</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Total value</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.instrument}
                </TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.avgCost}</TableCell>
                <TableCell align="right">{row.ltp}</TableCell>
                <TableCell align="right">{row.ltp * row.qty}</TableCell>
                <TableCell align="right">{calcPnL(row)}</TableCell>
                <TableCell align="right">{calcDayChange(row)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* Testing section */}



    </Container>
  );
}

export default Orders;