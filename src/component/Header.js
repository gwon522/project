import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaRegUser, FaSearch } from 'react-icons/fa'
import { Container, Logo, Item, ListBox, WebList, ItemButton, SearchWrap, ActionWrap, Wrap, SearchBox, ItemList } from "../styles/Header.style";


export const Header = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }
    const onKeyPress = (e) => {
        if (e.key == "Enter") {
            //서치 작업 시켜주면됨
            console.log('enter key 맞음', searchValue);
            searchValue.trim() == '' && console.log('공백임')
        }
    }

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
                        <Link to="/menu1">리뷰</Link>
                    </Item>
                </ItemList>
                <Wrap>
                    <SearchWrap role="search">
                        <FaSearch style={{ position: 'relative', left: '1.75rem' }} />
                        <SearchBox type="search" placeholder="관심있는 내용을 검색해보세요!" value={searchValue} onChange={onChangeHandler} onKeyPress={onKeyPress} />
                    </SearchWrap>
                    <ActionWrap>
                        <ItemButton bgColor={'#da3238'} color={'white'} onClick={() => { }}>글쓰기</ItemButton>
                        <ItemButton bgColor={'white'} color={'black'} onClick={() => { }}>로그인</ItemButton>
                    </ActionWrap>
                </Wrap>

            </ListBox>
        </Container >
    );
};
