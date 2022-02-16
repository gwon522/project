import React, { useEffect, useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import { Button, InputTop, InputBottom, LoginContainer, LoginTitle, FuncList, FuncUl } from 'styles/Login.style';
import { StyledLink } from '../styles/Global.style';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'store/modules/login';
import { useHistory } from 'react-router-dom';
import { loginResultSelector } from 'utils/selector';

export const Login = () => {
    const history = useHistory();
    const isLogIn = useSelector(loginResultSelector);
    const dispatch = useDispatch();
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
        const sendData = {
            id: debounceId,
            pw: debouncePw
        }
        dispatch(loginActions.request(sendData));
    }
    const onLoginKeyPress = (e) => {
        if (e.key === 'Enter') {
            onLoginButtonClick();
        }
    }
    useEffect(() => {
        if (isLogIn) {
            history.goBack();
        }
    }, [isLogIn, history]);

    return (
        <div>
            <LoginTitle>로그인
                <LoginContainer>
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
                </LoginContainer>
            </LoginTitle>
            <FuncUl>
                <FuncList><StyledLink to="/"><span>아이디 찾기</span></StyledLink></FuncList>
                <FuncList><StyledLink to="/"><span>비밀번호 찾기</span></StyledLink></FuncList>
                <FuncList><StyledLink to="/signup"><span>회원가입</span></StyledLink></FuncList>
            </FuncUl>
        </div>
    );
}