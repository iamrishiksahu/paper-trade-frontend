import { axiosInstance as axios } from '../api/axiosConfig'
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {


        const response = await axios.get('/auth/refresh', {
            withCredentials: true //allows to send cookies with requests

            /**
             *  the issued refresh token is stored in the httpOnly cookie and is not
             * accessible to JS and we never see it. But axios can send it to the server.
             */
        })
        setAuth((prev) => {
            return {
                ...prev,
                email: response?.data?.email,
                accessToken: response?.data?.accessToken,
                roles: response?.data?.roles
            };
        });



        return response.data.accessToken;

    }
    return refresh;
}

export default useRefreshToken