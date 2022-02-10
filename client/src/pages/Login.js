
import React from 'react';
import { Login } from 'component';
import { LoginWrapper } from 'styles/Login.style';


//로그인 화면
const LoginComponent = () => {
    //모달화 시킬건지 생각중, 모달화 시킨다면 카카오로그인이나 구글로그인 같은 api 도입 생각 해볼것
    return (
        <LoginWrapper>
            <Login />
        </LoginWrapper>
    );
}

export default LoginComponent;
