import React, { useState, useRef, useContext } from 'react'
import './Login.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Typography, Container, TextField, Box, Button } from '@mui/material';
import { axiosInstance as axios } from '../../api/axiosConfig';
import { app_logo_url } from '../../config/constants';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';


const LoginComponent = () => {


    const { setAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [emailHelper, setEmailHelper] = useState('');
    const [passHelper, setPassHelper] = useState('');


    const handleLoginClick = (e) => {
        e.preventDefault();

        setEmailHelper('');
        setPassHelper('');

        axios.post('/auth/login', {
            email: email,
            password: password
        }, 
        { 
            withCredentials: true // Need to pass it here as well to set the cookies in ress
        
        }).then(res => {

            console.log(res);
            console.log('cookies: ', res.headers)
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles
            setAuth({ email, password, roles, accessToken });
            navigate(from, { replace: true });
        }).catch((errr) => {

            if (!errr?.response) {
                console.log(errr);
                return alert('Opps! No response received from the server!')
            }

            if (errr.response?.data.message === 'USER_NOT_FOUND') {
                setEmailErr(true);
                setEmailHelper('This email is not registered with us!');
                return
            }

            if (errr.response?.data.message === 'INCORRECT_PASSWORD') {
                setPassErr(true);
                setPassHelper('Password is incorrect!');
                return
            }

            return alert('Internal server error! Please try again later')
        })
    }


    return (
        <>
            <Container maxWidth="xs" sx={{

                borderRadius: '4px',
                textAlign: 'center',
                mt: '24px',
                background: '#ffffff',
                pt: '10px',
                pb: '20px',
                boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.08)'
            }}>

                <img alt="logo" style={{
                    maxWidth: '64px',
                    margin: 'auto',
                    marginTop: '32px',
                    marginBottom: '16px',

                }} src={app_logo_url} />

                <Typography sx={{
                    fontSize: '20px',
                    marginTop: '16px',
                    marginBottom: '16px',
                }}>
                    Login to PaperTrade
                </Typography>

                <form onSubmit={(e) => handleLoginClick(e)}>
                    <Box sx={{
                        marginTop: '16px',
                        marginBottom: '16px',
                    }}>


                        <TextField
                            autoFocus={true}
                            error={emailErr}
                            helperText={emailHelper}
                            onFocus={() => setEmailErr(false)}
                            margin="none"
                            size="small"
                            type="email"
                            required={true}
                            id="login-email"
                            label="Email"
                            name="email"

                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Box>

                    <Box sx={{
                        marginTop: '16px',
                        marginBottom: '16px',
                    }}>
                        <TextField
                            onChange={(e) => { setPassword(e.target.value) }}

                            onFocus={() => setPassErr(false)}
                            error={passErr}
                            helperText={passHelper}
                            margin="none"
                            size="small"
                            type='password'
                            required={true}
                            id="login-passowrd"
                            label="Password"
                        />

                    </Box>

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
                        type='submit'

                    >
                        Login
                    </Button>

                </form>



                <Typography
                    sx={{
                        marginTop: '16px',
                        marginBottom: '16px',
                        cursor: 'pointer',
                        color: '#9b9b9b',
                        fontSize: '14px',
                        ":hover": {
                            color: '#313131'
                        }
                    }}
                    onClick={(e) => { navigate('/forgotpassword') }}
                >
                    Forgot your password?
                </Typography>


                <Typography
                    onClick={(e) => { navigate('/signup') }}
                    sx={{

                        marginBottom: '32px',
                        cursor: 'pointer',
                        color: '#9b9b9b',
                        fontSize: '12px',
                        ":hover": {
                            color: '#313131'
                        }

                    }}>
                    Create a new account
                </Typography>
            </Container>
        </>
    )
}

export default LoginComponent