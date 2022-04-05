import styled from "styled-components"
import { Comment } from "./Comment"

const ReCommentWrap = styled.div`
    margin-top: -1px;
    border-top: 1px solid #eee;
    background-color: #f8f8f8;
`
const CommentButton = styled.button`
    width: 100%;
    margin: 24px 0 0;
    border-color: #eee;
    border-style: solid;
    border-width: 1px 0;
    background: #fff;
    font-size: 14px;
    line-height: 59px;
    overflow: visible;
    background-color: transparent;
    cursor: pointer;

    @media screen and (min-width:1100px){
        width: 100%;
        margin: 30px 0 0;
        font-weight: 700;
    }
`
const ReCommentButton = styled(CommentButton)`
    margin-top: 0;
    border-top: 0;
    background-color: #f8f8f8;

    @media screen and (min-width:1100px){
        margin-left: 0;
    }
`

export const ReComment = (props) => {
    return (
        <ReCommentWrap>
            {/* <ReCommentButton>
                +대댓글 cnt개 더보기
            </ReCommentButton> */}
            {
                //대댓글 수만큼 반복
            }
            <Comment />
        </ReCommentWrap>
    )
}