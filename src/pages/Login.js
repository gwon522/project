import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button } from 'styles/Login.style';

function LoginComponent({visible, width, }) {
    //모달화 시킬건지 생각중, 모달화 시킨다면 카카오로그인이나 구글로그인 같은 api 도입 생각 해볼것
    return (
        <Container>
            <Input placeholder="ID를 입력하세요" name="id" id="id" />
            <Input
                placeholder="패스워드를 입력하세요"
                type="password"
                name="pw"
                id="pw"
            />
            <Button>로그인</Button>
        </Container>
    );
}

export default LoginComponent;
