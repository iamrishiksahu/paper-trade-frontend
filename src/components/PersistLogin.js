import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';


const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);

    const refresh = useRefreshToken();
    const { auth, setAuth } = useAuth();
    const [didMount, setDidmount] = useState(false);

    function verifyRefreshToken() {
        // try {

             refresh();

        // } catch (err) {

        //     console.error(err);

        // } finally {
            setIsLoading(false);
            setDidmount(true);

        // }
    }

    useEffect(() => {


        if(!auth?.accessToken){

            verifyRefreshToken();

        }else{
            setIsLoading(false);
            setDidmount(true);
            
        }




        // setDidmount(true);

    })

    // useEffect( () => {

        
    
       

    // }, []);

    useEffect(() => {
        console.log(`isLoading  : ${isLoading}`);
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    }, [didMount])
    

    // useEffect(() => {
    //     console.log(`isLoading  : ${isLoading}`);
    //     console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);

        
    // }, [isLoading]);


    if(!didMount) {
        return(<p>Loading...</p>);
    }else{
        
        return(<Outlet/>)
       
    }


    return (

        <>


            {isLoading
                ? <p>Loading...</p>
                : <Outlet />    
            }
        </>

    )


}

export default PersistLogin;