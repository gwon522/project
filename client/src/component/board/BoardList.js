import React, { useEffect, useState } from 'react';
import BoardItem from './BoardItem';
import styled from 'styled-components';
import BoardTempData from './BoardTempData';
import { boardListAPI } from 'store/apis/board';

const ArticleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    @media screen and (min-width: 1100px) {
        width: 100%;
        min-height: 800px;
    }
`;

//게시판 목록
const BoardList = (props) => {
    //넘어온 토픽명
    const topicName = props.id;

    const item = BoardTempData;

    //무한스크롤 적용하려면 데이터 가지고있는거에 추가하는게 유리한가?
    const [boardList, setBoardList] = useState([]);
    const [sort, setSort] = useState();
    const [pagenation, setPagenation] = useState(0);

    useEffect(() => {
        //토픽이름, 페이지네이션 시작, 끝, 정렬방식
        const sendData = {
            id: topicName,
            start: pagenation,
            sort: sort
        }
        boardListAPI(sendData).then(result => setBoardList(result.data));
    }, [])


    //boardItem에 토픽명칭만 넣어서 찾아주기
    return (
        <ArticleList>
            {boardList.map((item) => {
                return <BoardItem key={item.id} item={item} />;
            })}
        </ArticleList>
    );
};

export default BoardList;
