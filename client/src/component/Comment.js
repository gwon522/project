import styled from "styled-components"
import { NameColor, StyledLink, WrapInfo } from "styles/Global.style"

const CommentWrap = styled.div`
    padding: 8px 20px 15px;
    border-bottom: 1px solid #eee;

    @media screen and (min-width:1100px){
        padding: 12px 20px 19px;
    }
`
const Name = styled.p`
    margin-top: 9px;
    color: #94969b;
    font-size: 12px;
    line-height: 1.33em;
`
const CommentText = styled.p`
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.43em;

    @media screen and (min-width:1100px){
        margin-top: 5px;
        font-size: 16px;
        line-height: 1.5em;
    }
`
export const Comment = () => {
    //대댓글 버튼, 댓글 클릭시 기능 => 로그인시 가능하게, 구현도 해야됨
    return (
        <CommentWrap>
            <Name>
                <StyledLink style={NameColor} to="/">직장명</StyledLink> · 블라인드처리
            </Name>
            <CommentText>글내용</CommentText>
            <WrapInfo>
                시간 좋아요 대댓글
            </WrapInfo>
        </CommentWrap>
    )
}