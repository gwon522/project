import BoardCarousel from 'component/board/BoardCarousel';
import BoardList from 'component/board/BoardList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArticleList, BoardWrap } from 'styles/board/Board.style';

//게시판 화면
const Board = (props) => {
    return (
        <BoardWrap>
            <BoardCarousel id={props.match.params.id} />
            <ArticleList>
                <BoardList id={props.match.params.id} />
            </ArticleList>
        </BoardWrap>
    );
};

export default Board;
