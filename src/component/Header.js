import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Item, ListBox, ItemButton, ActionWrap, Wrap, ItemList } from "../styles/Header.style";
import { Search } from './Search';

export const Header = (props) => {
    return (
        <Container>
            <Logo>
                <Link to="/">blind</Link>
                <em>Temp</em>
            </Logo>
            <ListBox>
                <ItemList>
                    <Item>
                        <Link to="/">홈</Link>
                    </Item>
                    <Item>
                        <Link to="/review">리뷰</Link>
                    </Item>
                </ItemList>
                <Wrap>
                    <Search />
                    <ActionWrap>
                        <ItemButton bgColor={'#da3238'} color={'white'} onClick={() => { alert('글쓰기') }}>글쓰기</ItemButton>
                        <ItemButton bgColor={'white'} color={'black'} onClick={() => { alert('로그인') }}> 로그인</ItemButton>
                    </ActionWrap>
                </Wrap>

            </ListBox>
        </Container >
    );
};

