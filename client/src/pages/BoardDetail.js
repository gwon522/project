
import React from 'react';
import BoardDetail from '../component/board/BoardDetail';
import { BoardDetailWrap } from 'styles/BoardDetail.style';
import { Aside } from "component/index";

const BoardDetailPage = () => {
    return (
        <BoardDetailWrap>
            <BoardDetail />
            <Aside />
        </BoardDetailWrap>
    )
}

export default BoardDetailPage