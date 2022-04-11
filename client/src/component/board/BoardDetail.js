import { Comment, ReComment } from 'component/index';
import Spinner from 'component/Spinner';
import { useEffect, useState } from 'react';
import { boardDetailAPI } from 'store/apis/board';
import {
    Article,
    ArticleBody,
    ArticleComment,
    ArticleHead,
    ArticleInfo,
    CommentLink,
    Contents,
    LikeLink,
    Name,
    TopicLink,
    ReplyArea, ReplyButton
} from 'styles/board/BoardDetail.style';
import {
    FuncSpan,
    InfoFnc,
    NameColor,
    StyledLink,
    WrapInfo,
} from 'styles/Global.style';

//게시판 상세글
const BoardDetail = (props) => {
    const id = props.id;
    const [detailData, setDetailData] = useState('');
    useEffect(() => {
        const settingData = async (param) => {
            setDetailData(await boardDetailAPI({ id: param }));
        }
        settingData(id);
    }, [id]);
    //좋아요 누르면 좋아요 올라가는 기능만들기? or 서버에서 처리?

    return (
        <Contents>
            {!detailData && <Spinner />}
            <ArticleHead>
                <h1>
                    <StyledLink to="/topic/all">토픽</StyledLink>
                    <TopicLink to={`/topic/${detailData.cd_name}`}>{detailData.cd_name}</TopicLink>
                </h1>
                <h2>{detailData.b_title}</h2>
                <Name>
                    <StyledLink style={NameColor} to="#">
                        {detailData.company === '' ? '비공개' : detailData.company}
                    </StyledLink>
                    {' '}· {detailData.nickNm === "" ? '탈퇴회원' : detailData.nickNm}
                </Name>
                <WrapInfo func="detail">
                    <FuncSpan func="time">{detailData.b_date}</FuncSpan>
                    <FuncSpan func="view">{detailData.b_view}</FuncSpan>
                    <FuncSpan func="cmt">{detailData.comment}</FuncSpan>
                    <InfoFnc func="detail">
                        <FuncSpan func="bookmark" />
                    </InfoFnc>
                </WrapInfo>
            </ArticleHead>
            <ArticleBody>
                <Article>{detailData.b_content}</Article>
                <ArticleInfo>
                    <LikeLink to="#">{detailData.likes}</LikeLink>
                    <CommentLink to="#">{detailData.comment}</CommentLink>
                </ArticleInfo>
            </ArticleBody>
            <ArticleComment>
                <h3>댓글 {detailData.comment}</h3>
                <div>
                    <ReplyArea>
                        <ReplyButton>댓글을 남겨주세요.</ReplyButton>
                    </ReplyArea>
                    {
                        //코멘트에 해당글의 ID를 주어서 코멘트 테이블에서 불러오기
                        //RECOMENT 처리 어떻게 할지 생각
                    }
                    <Comment id={id} />
                    <ReComment />
                </div>
            </ArticleComment>
        </Contents>
    );
};

export default BoardDetail;
