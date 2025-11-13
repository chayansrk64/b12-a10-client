import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {
     const {user, loading} = use(AuthContext)
     const location = useLocation();

     if(loading){
        return <LoadingSpinner></LoadingSpinner>
     }

     if(user){
        return children
     }

     return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivateRoute;