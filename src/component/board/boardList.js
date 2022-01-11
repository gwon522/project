
import React from "react";
import BoardItem from "./BoardItem";
import styled from 'styled-components';
import BoardTempData from "./BoardTempData";

const BoardList = () => {
    const item = BoardTempData;
    const ArticleWrap = styled.div`
        width: 100%;
        min-height: 800px;
    `
    const ArticleList = styled.div`
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;

    `;
    return (
        <ArticleWrap>
            <ArticleList>
                {item.map((item) => {
                    return <BoardItem key={item.id} item={item} />
                })}
            </ArticleList>
        </ArticleWrap>
    )
}

export default BoardList;