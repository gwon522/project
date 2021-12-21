
import React from 'react';
import { LoginWrapper, Input, Button } from 'styles/Login.style';

const LoginComponent = (props) => {
    //모달화 시킬건지 생각중, 모달화 시킨다면 카카오로그인이나 구글로그인 같은 api 도입 생각 해볼것

    return (
        <LoginWrapper>
            <Input placeholder="ID를 입력하세요" name="id" id="id" />
            <Input
                placeholder="패스워드를 입력하세요"
                type="password"
                name="pw"
                id="pw"
            />
            <Button onClick={props.onLogin('Nesaz', 'password')}> 로그인</Button>
        </LoginWrapper>

    );
}

export default LoginComponent;
