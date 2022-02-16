import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginResultSelector } from 'utils/selector';
import { Container, Logo, HeaerWrapper, Function, ActionWrap, ActionLink } from "../styles/Header.style";

export const Header = (props) => {
    const isLogin = useSelector(loginResultSelector);

    return (
        <Container>
            <HeaerWrapper>
                <Logo>
                    <Link to="/">blind</Link>
                    <em>TOPIC</em>
                </Logo>
                <Function>
                    {/* <Explain href="https://github.com/gwon522/project"><span>깃허브이동</span></Explain> */}
                    <ActionWrap>
                        <ActionLink name="write" to="/write">글쓰기</ActionLink>
                        {isLogin && <ActionLink name="logout" to="/logout">로그아웃</ActionLink>}
                        {!isLogin && <ActionLink name="login" to="/login">로그인</ActionLink>}
                    </ActionWrap>
                </Function>
            </HeaerWrapper>
        </Container >
    );
};

