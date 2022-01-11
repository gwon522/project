import BoardList from "component/board/BoardList";
import styled from "styled-components";

const Board = () => {
    const BoardWrap = styled.div`
        margin:0 auto;
    `
    return (
        <BoardWrap>
            <BoardList />
        </BoardWrap>
    )
}

export default Board;