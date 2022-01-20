import styled from "styled-components"

export const CommentWrap = styled.div`
    padding: 8px 20px 15px;
    border-bottom: 1px solid #eee;

    @media screen and (min-width:1100px){
        padding: 12px 20px 19px;
    }
`
export const Name = styled.p`
    margin-top: 9px;
    color: #94969b;
    font-size: 12px;
    line-height: 1.33em;
`
export const CommentText = styled.p`
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.43em;

    @media screen and (min-width:1100px){
        margin-top: 5px;
        font-size: 16px;
        line-height: 1.5em;
    }
`