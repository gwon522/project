import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginResultSelector } from '../utils/selector';

const PublicRoute = ({ Component, restricted, ...rest }) => {
    const isLogin = useSelector(loginResultSelector);
    //restricted는 로그인시 또 로그인페이지 요청할 경우 체크하기 위해서 사용
    return (
        <Route {...rest} render={(props) => {
            isLogin && restricted ? <Redirect to="/" /> : <Component {...props} />;
        }}
        />
    );
};

export default PublicRoute;