import BoardList from "component/board/BoardList";
import styled from "styled-components";

const Board = () => {
    const BoardWrap = styled.div`
        display: flex;
        flex-direction: column;
        border-top: 1px solid #d4d4d4;
        max-width: 1140px;
        box-sizing: border-box;
        margin: 0 auto;

        @media screen and (min-width:1100px){
            flex-direction: row;
            border-top: none;
            padding: 40px 20px 0;
            padding-top: 32px;
        }
    `
    return (
        <BoardWrap>
            <BoardList />
        </BoardWrap>
    )
}

export default Board;