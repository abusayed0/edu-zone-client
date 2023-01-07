import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth-provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user,isLoading } = useContext(AuthContext);
    const location = useLocation();
    
    if(isLoading){
        return <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{justifyContent:"center"}}
        wrapperClassName=""
        visible={true}
         />
    }
    else if (!user){
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }
    else{
        return children;
    }
};

export default PrivateRoute;