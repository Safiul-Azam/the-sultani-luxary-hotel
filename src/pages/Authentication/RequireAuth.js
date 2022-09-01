import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../Shared/Spinner';

const RequireAuth = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;