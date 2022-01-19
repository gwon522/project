import BoardCarousel from "component/board/BoardCarousel";
import BoardList from "component/board/BoardList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArticleList, BoardWrap } from "styles/board/Board.style";


const Board = () => {

    return (
        <BoardWrap>
            <BoardCarousel />
            <ArticleList>
                <BoardList />
            </ArticleList>
        </BoardWrap>
    )
}

export default Board;