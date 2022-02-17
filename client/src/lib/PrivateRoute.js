import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { loginResultSelector } from "utils/selector";
import isAdmin from "./isAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogin = useSelector(loginResultSelector);
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) => {
                //이동전에 alert띄우고 이동시키기
                !isLogin &&
                    alert("로그인 후 다시 시도하십시오.");
                return isAdmin() ? <Component {...props} /> : <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;