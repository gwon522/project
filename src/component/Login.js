import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 5rem;
    padding: 0 25rem;
`

const Input = styled.input`
    position : relative;
    overflow: hidden;
    width: 100%;
    font-size:1.5rem;
    height: 3rem;
    margin: 0 0 0.5rem;
    background: #fff;
    box-sizing: border-box;
    border: solid 1px #dadada;
    `

const Button = styled.div`
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    background-color: #fff2af;
    text-align: center;
    border: none;
    justify-content: center;

    ${({ disabled }) =>
        disabled &&
        `
        background-color: #efefef;
        `
    }
`

function Login() {
    return (
        <Container>
            <Input placeholder="ID를 입력하세요" name="id" id="id" />
            <Input placeholder="패스워드를 입력하세요" type="password" name="pw" id="pw" />
            <Button>로그인</Button>
        </Container>
    )
}

export default Login;