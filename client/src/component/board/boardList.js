import React from 'react';
import BoardItem from './BoardItem';
import styled from 'styled-components';
import BoardTempData from './BoardTempData';

const BoardList = (props) => {
    const item = BoardTempData;
    const id = props.id;

    const ArticleList = styled.div`
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        @media screen and (min-width: 1100px) {
            width: 100%;
            min-height: 800px;
        }
    `;
    return (
        <ArticleList>
            {item.map((item) => {
                return <BoardItem key={item.id} item={item} />;
            })}
        </ArticleList>
    );
};

export default BoardList;
