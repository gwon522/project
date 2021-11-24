import React from 'react';
import { Container, Input, Button } from 'styles/Login.style';

function Login() {
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

export default Login;
