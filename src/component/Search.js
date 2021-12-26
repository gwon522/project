import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const SearchSection = styled.section`
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    position:absolute;
    left:8px;
    top:12px;
    color: black;
`;
const SearchInput = styled.input`
    border-radius: 25px;
    border : solid black 2px;
    width : 100%;
    height: 50px;
    padding-left: 30px;
`;

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickHandler = () => {
        dataSearch();
    }
    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            //서치 작업 시켜주면됨
            dataSearch();
        }
    }
    const dataSearch = () => {
        searchValue.trim() === '' ? alert('검색어를 입력해주세요 모달띄우기') : console.log('빈값이 아님')

    }
    return (
        <SearchSection>
            <SearchInput
                type="search"
                placeholder='관심있는 내용을 입력하세요!'
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
            />
            <Button onClick={onClickHandler}>
                <FaSearch size="15" />
            </Button>
        </SearchSection>
    )
};