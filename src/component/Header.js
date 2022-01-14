import React  from 'react';
import { Link } from 'react-router-dom';
import { StyledLink } from 'styles/Global.style';
import { Container, Logo, Item, Nav, ItemList, HeaerWrapper, NavMask, NavTab, Function, Explain, ActionWrap, ActionLink } from "../styles/Header.style";

export const Header = (props) => {
    return (
        <Container>
            <HeaerWrapper>
                <Logo>
                    <Link to="/">blind</Link>
                    <em>Temp</em>
                </Logo>
                <Nav>
                    <NavMask>
                        <NavTab>
                            <ItemList>
                                <Item>
                                    <StyledLink to="/">홈</StyledLink>
                                </Item>
                                <Item>
                                    <StyledLink to="/review">리뷰</StyledLink>
                                </Item>
                            </ItemList>
                        </NavTab>
                    </NavMask>
                </Nav>
                <Function>
                    <Explain><span>테스트용데이터</span></Explain>
                    <ActionWrap>
                        <ActionLink name="write" to="/write">글쓰기</ActionLink>
                        <ActionLink name="login" to="/login">로그인</ActionLink>
                    </ActionWrap>
                </Function>
            </HeaerWrapper>
        </Container >
    );
};

