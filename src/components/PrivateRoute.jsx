import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const {isAuthenticated, setLastVisitedPage} = useAuth();
 
    if (!isAuthenticated) {
        setLastVisitedPage(window.location.pathname);
        return <Navigate to="/login" />;
    }
    return children;
}

export default PrivateRoute;