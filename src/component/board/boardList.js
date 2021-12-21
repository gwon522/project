
import React from "react";
import BoardItem from "./BoardItem";
import styled from 'styled-components';
import BoardTempData from "./BoardTempData";

const BoardList = () => {
    const item = BoardTempData;
    const ArticleList = styled.div`
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;

    `;
    return (
        <ArticleList>
            {item.map((item) => {
                return <BoardItem key={item.id} item={item} />
            })}
        </ArticleList>
    )
}

export default BoardList;