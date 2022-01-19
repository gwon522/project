import styled from "styled-components";

export const BoardWrap = styled.div`
        display: flex;
        flex-direction: column;
        border-top: 1px solid #d4d4d4;
        max-width: 1140px;
        box-sizing: border-box;
        margin: 0 auto;

        @media screen and (min-width:1100px){
            flex-direction: column;
            border-top: none;
            padding: 40px 20px 0;
            padding-top: 32px;
        }
    `


export const ArticleList = styled.div`
display: flex;
flex-wrap: wrap;
overflow: hidden;
@media screen and (min-width:1100px){
    width: 100%;
    min-height: 800px;
}
`;