import './App.css';
import LoginComponent from './components/auth/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignupCompnent from './components/auth/Singup';
import ForgotPassowrd from './components/auth/ForgotPassword';
import Landing from './components/Landing'
import Dashboard from './components/dashboard/Dashboard';
import Positions from './components/dashboard/Positions';
import Overview from './components/dashboard/Overview';
import Funds from './components/dashboard/Funds';
import Orders from './components/dashboard/Orders';
import { useEffect, useState } from 'react';
import NoInternetConnection from './components/NoInternet';
import RequireAuth from './components/RequireAuth';

function App() {

  const [script, setScript] = useState({
    symbol: 'RELIANCE',
    exchange: 'BSE',
  })

  const changeScript = (e, stock) => {
    e.preventDefault();
    setScript({
      symbol: stock.symbol,
      exhange: 'BSE',
    })


  }

  return (

    <NoInternetConnection>



      <BrowserRouter>
        <Routes>
          Rahon me main har kadam main tere sath chalas


          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/signup' element={<SignupCompnent />} />
          <Route path='/forgotpassword' element={<ForgotPassowrd />} />

          <Route element={<RequireAuth />}>
            <Route path='/dashboard' element={<Dashboard changeScript={changeScript} />}> 
              <Route exact path='/dashboard/' element={<Overview symbol={script.symbol} />} />
              <Route path='/dashboard/positions' element={<Positions />} />
              <Route path='/dashboard/funds' element={<Funds />} />
              <Route path='/dashboard/orders' element={<Orders />} />
            </Route>
          </Route>




        </Routes>
      </BrowserRouter>

    </NoInternetConnection>



  );
}

export default App;
