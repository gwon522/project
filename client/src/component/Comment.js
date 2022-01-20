import { CommentText, CommentWrap, Name } from "styles/Comment.style"
import { FuncSpan, NameColor, StyledLink, WrapInfo } from "styles/Global.style"


export const Comment = (props) => {
    //대댓글 버튼, 댓글 클릭시 기능 => 로그인시 가능하게, 구현도 해야됨
    return (
        <CommentWrap>
            <Name>
                <StyledLink style={NameColor} to="/">직장명</StyledLink> · 블라인드처리
            </Name>
            <CommentText>글내용</CommentText>
            <WrapInfo>
                <FuncSpan>시간</FuncSpan>
                <FuncSpan>좋아요</FuncSpan>
                <FuncSpan>대댓글</FuncSpan>
            </WrapInfo>
        </CommentWrap>
    )
}