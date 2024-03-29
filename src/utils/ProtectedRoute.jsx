import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {

    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    const checkUserToken = () => {

        const userToken = localStorage.getItem('user-token');

        if (!userToken || userToken === 'undefined') {
            setIsLogin(false);
            return navigate('/login');
        }

        setIsLogin(true);
    }

    useEffect(() => {

        checkUserToken();

    }, [isLogin]);

    return (
        <React.Fragment>
            {
                isLogin ? props.children : null
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;