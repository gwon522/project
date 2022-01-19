
import { Article, ArticleBody, ArticleComment, ArticleHead, ArticleInfo, CommentLink, Contents, FuncSpan, LikeLink, Name, TopicLink } from "styles/BoardDetail.style";
import { InfoFnc, StyledLink, WrapInfo } from "styles/Global.style";


const BoardDetail = () => {

    return (
        <Contents>
            <ArticleHead>
                <h1>
                    <StyledLink to="/topic/all">토픽</StyledLink>
                    <TopicLink to="/topic/블라블라">블라블라</TopicLink>
                </h1>
                <h2>
                    제목부분
                </h2>
                <Name>
                    <StyledLink style={{ color: "#37acc9" }}>직장명</StyledLink> 부서명
                </Name>
                <WrapInfo func="detail">
                    <FuncSpan func="time">시간</FuncSpan>
                    <FuncSpan func="view">뷰</FuncSpan>
                    <FuncSpan func="cmt">코멘트</FuncSpan>
                    <InfoFnc func="detail">
                        <FuncSpan func="bookMark" />
                    </InfoFnc>
                </WrapInfo>
            </ArticleHead>
            <ArticleBody>
                <Article>글을 여기다 작성</Article>
                <ArticleInfo>
                    <LikeLink>좋아요</LikeLink>
                    <CommentLink>코멘트</CommentLink>
                </ArticleInfo>
            </ArticleBody>
            <ArticleComment>
                <h3>댓글 cnt</h3>
                <div>
                    <div></div>
                </div>
            </ArticleComment>
        </Contents>
    )

}


export default BoardDetail;