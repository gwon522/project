
import React from 'react';
import { useState } from 'react';
import { LoginWrapper, Input, Button } from 'styles/Login.style';

const LoginComponent = () => {
    //모달화 시킬건지 생각중, 모달화 시킨다면 카카오로그인이나 구글로그인 같은 api 도입 생각 해볼것
    const [loginInput, setLoginInput] = useState({
        id: '',
        pw: ''
    });

    const onChangeInput = (e) => {
        console.log(e.target.value);
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        })
    }
    const onLoginButtonClick = () => {
        console.log(loginInput);
    }
    const onLoginKeyPress = (e) => {
        if (e.key === 'Enter') {
            onLoginButtonClick();
        }
    }

    return (
        <LoginWrapper>
            <div> 로그인 </div>
            <Input placeholder="ID를 입력하세요" name="id" id="id" onChange={onChangeInput} />
            <Input
                placeholder="패스워드를 입력하세요"
                type="password"
                name="pw"
                id="pw"
                onChange={onChangeInput}
                onKeyPress={onLoginKeyPress}
            />
            <Button onClick={onLoginButtonClick}> 로그인</Button>
        </LoginWrapper>
    );
}

export default LoginComponent;
