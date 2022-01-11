import { FiSearch } from 'react-icons/fi'
import React, { useState } from 'react';
import { Button, SearchInput, SearchSection } from 'styles/Search.style';



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
        searchValue.trim() === '' ? alert('검색어를 입력해주세요') : console.log('빈값이 아님')

    }
    return (
        <SearchSection>
            <SearchInput
                type="search"
                placeholder='관심있는 내용을 검색해보세요!'
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
            />
            <Button onClick={onClickHandler} />
        </SearchSection>
    )
};