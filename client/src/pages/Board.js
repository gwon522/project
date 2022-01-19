import BoardCarousel from "component/board/BoardCarousel";
import BoardList from "component/board/BoardList";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BoardWrap = styled.div`
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

const Board = () => {
    
    return (
        <BoardWrap>
            <BoardCarousel />
            <BoardList />
        </BoardWrap>
    )
}

export default Board;