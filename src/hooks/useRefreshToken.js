import { axiosInstance as axios } from '../api/axiosConfig'
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh =   () => {
        
        const response =  axios.get('/auth/refresh', {
            withCredentials: true //allows to send cookies with requests

            /**
             *  the issued refresh token is stored in the httpOnly cookie and is not
             * accessible to JS and we never see it. But axios can send it to the server.
             */
        }).then((res) => {
            setAuth( (prev) => {                
                return {...prev, 
                    accessToken: res?.data?.accessToken,
                    roles: res?.data?.roles
                };
            });
        }).catch(err => {
            console.error(err);
        });

        

        // return response?.data?.accessToken;
    }
  return refresh;
}

export default useRefreshToken