import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button } from 'styles/Login.style';

function LoginComponent() {
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
            <Link to="/Signup">회원가입</Link>
        </Container>
    );
}

export default LoginComponent;
