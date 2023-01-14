import React, { useEffect, useState } from 'react'
import { axiosInstance as axios } from '../../api/axiosConfig'
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

const Orders = () => {


  const axiosPrivate = useAxiosPrivate();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();



  const getUserDetails = async () => {

    try {

      const userInfo = await axiosPrivate.get('/user/accountInfo', {});

      setUserData(userInfo.data)



    } catch (err) {
      console.error(err);
      navigate('/login', {state: {from : location}, replace: true})
    }


  }




  return (
    <div className="main_order_container">

      <button type='button' onClick={() => getUserDetails()}>Click me</button>

      {userData ? <p>{JSON.stringify(userData)}</p> : <p>No data is coming</p>}


    </div>
  )
}

export default Orders