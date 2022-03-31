import React, { useEffect, useState } from 'react';
import { SignUpAPI, CheckDuplicateIdAPI } from 'store/apis/user';
import { Button, Input, LoginTitle, LoginContainer, InputTop, InputBottom, TextBox } from 'styles/Login.style';
import { useDebounce } from 'hooks/index';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {
    const history = useHistory();
    const [checkId, setCheckId] = useState(false);
    const [checkPw, setCheckPW] = useState(false);

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwChk, setPwChk] = useState('');
    const [company, setCompany] = useState('');
    const debouncedId = useDebounce(id, 300);
    const debouncedPw = useDebounce(pw, 300);
    const debouncedPwChk = useDebounce(pwChk, 300);

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

    //중복아이디 체크
    useEffect(() => {
        setCheckId(false);
        CheckDuplicateIdAPI(debouncedId).then(result => {
            if (result) {
                return setCheckId(true);
            }
        });
    }, [debouncedId]);

    //비밀번호 체크
    useEffect(() => {
        setCheckPW(false);
        if (debouncedPw.length === 0 || debouncedPwChk.length === 0) {
            return;
        }
        if (debouncedPw !== debouncedPwChk) {
            return setCheckPW(true);
        }
    }, [debouncedPw, debouncedPwChk]);

    const SignUpHandler = (e) => {
        e.preventDefault();
        if (debouncedId.length === 0) {
            return alert('아이디를 입력해 주세요.');
        }
        if (debouncedPw.length === 0) {
            return alert('비밀번호를 입력해 주세요.');
        }
        if (company.length === 0) {
            return alert('직장명을 입력해 주세요.');
        }
        if (checkId === true) {
            return alert('아이디를 확인해 주세요.');
        }
        if (checkPw === true) {
            return alert('비밀번호가 일치하지 않습니다.')
        }

        const sendData = {
            id: id,
            pw: pw,
            company: company
        }
        SignUpAPI(sendData).then(result => {
            //현재 alert로 가입완료 알려줌 화면분기 처리하는게 좋을 듯
            alert(result);
            history.goBack();
        });

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
                        <TextBox style={checkPw ? { display: 'block' } : { display: 'none' }}>비밀번호가 다릅니다.</TextBox>
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