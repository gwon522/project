import React from 'react';
import { Button, Container, Input } from 'styles/Login.style';

function SignupComponent() {
    return (
        <Container>
            <text>회원가입</text>
            <Input placeholder="id" />
            <Input placeholder="pw" type="password" />
            <Button>회원가입</Button>
        </Container>
    );
}

export default SignupComponent;
