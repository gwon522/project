import React, { useEffect, useState } from 'react';
import SignUpAPI, { CheckDuplicateIdAPI } from 'store/apis/user';
import { Button, Input, LoginTitle, LoginContainer, InputTop, InputBottom, TextBox } from 'styles/Login.style';
import useDebounce from '../hooks/useDebounce';

export const SignUp = () => {
    const [checkId, setCheckId] = useState(false);

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwChk, setPwChk] = useState('');
    const [company, setCompany] = useState('');
    const debouncedId = useDebounce(id, 300);

    const changeId = (e) => {
        setId(e.target.value);
    }
    const changePw = (e) => {
        setPw(e.target.value);
    }
    const changePwChk = (e) => {
        setPwChk(e.target.value);
    }
    const changeCompany = (e) => {
        setCompany(e.target.value);
    }

    useEffect(() => {
        CheckDuplicateIdAPI(debouncedId).then(result => {
            if (result) {
                return setCheckId(true);
            }
            setCheckId(false);
        });
    }, [debouncedId]);

    const SignUpHandler = (e) => {
        e.preventDefault();
        //id 중복 아닌지, 비밀번호 둘다 일치하게 작성했는지, 직장명 빈칸 아닌지
        const sendData = {
            id: id,
            pw: pw,
            company: company
        }
        console.log(sendData);
        SignUpAPI(sendData).then(result => console.log(result));

    }
    return (
        <div>
            <LoginTitle> 회원가입
                <LoginContainer>
                    <form onSubmit={SignUpHandler}>
                        <InputTop value={id} placeholder="아이디" name="id" id="id" onChange={changeId} />
                        <TextBox style={checkId ? { display: 'block' } : { display: 'none' }}>중복된아이디입니다.</TextBox>
                        <Input
                            placeholder="비밀번호"
                            type="password"
                            name="pw"
                            id="pw"
                            value={pw}
                            onChange={changePw}
                        />
                        <Input
                            placeholder="비밀번호 확인"
                            type="password"
                            name="pwChk"
                            id="pwChk"
                            value={pwChk}
                            onChange={changePwChk}
                        />
                        <TextBox check={checkId}>비밀번호가 다릅니다.</TextBox>
                        <InputBottom
                            placeholder="직장명"
                            type="text"
                            name="company"
                            id="company"
                            value={company}
                            onChange={changeCompany}
                        />
                        <Button type='submit'>회원가입</Button>
                    </form>
                </LoginContainer>
            </LoginTitle>
        </div>
    )
}