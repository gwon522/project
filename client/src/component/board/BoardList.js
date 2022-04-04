import React, { useEffect, useState } from 'react';
import BoardItem from './BoardItem';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from 'store/modules/board';
import { boardSelector } from 'utils/selector';
import Spinner from 'component/Spinner';

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
    //무한스크롤 적용하려면 데이터 가지고있는거에 추가하는게 유리한가?
    const dispatch = useDispatch();
    const boardList = useSelector(boardSelector);
    const loading = useSelector(state => state.loading.BOARD);
    const [sort, setSort] = useState('');
    const [pagenation, setPagenation] = useState(0);

    useEffect(() => {
        //토픽이름, 페이지네이션 시작, 끝, 정렬방식
        const sendData = {
            id: topicName,
            start: pagenation,
            sort: sort
        }
        console.log('data요청', sendData);
        dispatch(boardActions.request(sendData));
    }, [dispatch, pagenation, sort, topicName]);

    if (loading) {
        return (
            <ArticleList>
                <Spinner />
            </ArticleList>
        )
    }

    return (
        <ArticleList>
            {boardList &&
                boardList.map((item, index) => {
                    return <BoardItem key={index} item={item} />;
                })
            }
            {!boardList && <div>게시글이 없음</div>}
        </ArticleList>
    );
};

export default BoardList;
