import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth() {

    const { auth } = useAuth();
    const location = useLocation();

    console.log('auth status email: ', auth.email)
    
    if(auth){
    return(
        auth?.email 
            ? <Outlet />
            : <Navigate to='/login' state={{from: location}} replace/>
    )}
}

export default RequireAuth;