import React from 'react';
import { Button, LoginWrapper, Input } from 'styles/Login.style';

function SignupComponent() {
    return (
        <LoginWrapper>
            <text>회원가입</text>
            <Input placeholder="id" />
            <Input placeholder="pw" type="password" />
            <Button>회원가입</Button>
        </LoginWrapper>
    );
}

export default SignupComponent;
