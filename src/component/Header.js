import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Item, Nav, ItemButton, ActionWrap, Wrap, ItemList, HeaerWrapper, NavMask, NavTab } from "../styles/Header.style";
import { Search } from './Search';

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
                                    <Link to="/">홈</Link>
                                </Item>
                                <Item>
                                    <Link to="/review">리뷰</Link>
                                </Item>
                            </ItemList>
                        </NavTab>
                    </NavMask>
                </Nav>
                {/* <Wrap>
                    <ActionWrap>
                        <ItemButton bgColor={'#da3238'} color={'white'} onClick={() => { alert('글쓰기') }}>글쓰기</ItemButton>
                        <ItemButton bgColor={'white'} color={'black'} onClick={() => { alert('로그인') }}> 로그인</ItemButton>
                    </ActionWrap>
                </Wrap> */}
            </HeaerWrapper>
        </Container >
    );
};

