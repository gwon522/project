import React from 'react';
import { SignUp } from 'component';
import { LoginWrapper } from 'styles/Login.style';


//회원가입 화면
const SignupPage = () => {
    return (
        <LoginWrapper>
            <SignUp />
        </LoginWrapper>
    );
}

export default SignupPage;
