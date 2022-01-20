
import { Comment } from "component/index";
import { ReplyArea, ReplyButton } from "styles/board/BoardDetail.style";
import { Article, ArticleBody, ArticleComment, ArticleHead, ArticleInfo, CommentLink, Contents, LikeLink, Name, TopicLink } from "styles/board/BoardDetail.style";
import { FuncSpan, InfoFnc, NameColor, StyledLink, WrapInfo } from "styles/Global.style";


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
                    <StyledLink style={NameColor} to="/">직장명</StyledLink> · 아이디
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
                    <LikeLink to="/">좋아요</LikeLink>
                    <CommentLink to="/">코멘트</CommentLink>
                </ArticleInfo>
            </ArticleBody>
            <ArticleComment>
                <h3>댓글 cnt</h3>
                <div>
                    <ReplyArea>
                        <ReplyButton>댓글을 남겨주세요.</ReplyButton>
                    </ReplyArea>
                    <Comment />
                </div>
            </ArticleComment>
        </Contents>
    )

}


export default BoardDetail;