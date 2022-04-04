
import React from 'react';
import BoardDetail from '../component/board/BoardDetail';
import { BoardDetailWrap } from 'styles/board/BoardDetail.style';
import { Aside } from "component/index";


//게시판 상세 화면
const BoardDetailPage = (props) => {
    return (
        <BoardDetailWrap>
            <BoardDetail id={props.match.params.id} />
            <Aside id={props.match.params.id} />
        </BoardDetailWrap>
    )
}

export default BoardDetailPage