import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function AuthenticatedLayout() {
    const [isLogin, setIsLogin] = useState(false);

    const checkUserToken = () => {

        const userToken = localStorage.getItem('user-token');

        if (!userToken || userToken === 'undefined') {
            setIsLogin(false);
        }

        setIsLogin(true);
    }

    useEffect(() => {
        checkUserToken();
    }, [isLogin]);

    return (
        <React.Fragment>
            {isLogin && <Navbar />}
            <Outlet />
        </React.Fragment>
    )
}