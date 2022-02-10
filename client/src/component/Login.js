import useDebounce from 'hooks/useDebounce';
import React, { useState } from 'react';
import { Button, InputTop, InputBottom } from 'styles/Login.style';

export const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const debounceId = useDebounce(id, 300);
    const debouncePw = useDebounce(pw, 300);

    const onChangeInput = (e) => {
        if (e.target.name === 'id') {
            setId(e.target.value);
        }
        if (e.target.name === 'pw') {
            setPw(e.target.value);
        }


    }
    const onLoginButtonClick = () => {
        console.log(debounceId, debouncePw);
    }
    const onLoginKeyPress = (e) => {
        if (e.key === 'Enter') {
            onLoginButtonClick();
        }
    }
    return (
        <div>
            <InputTop placeholder="아이디" name="id" id="id" onChange={onChangeInput} />
            <InputBottom
                placeholder="비밀번호"
                type="password"
                name="pw"
                id="pw"
                onChange={onChangeInput}
                onKeyPress={onLoginKeyPress}
            />
            <Button onClick={onLoginButtonClick}> 로그인</Button>
        </div>
    );
}