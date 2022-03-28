import BoardWrite from "component/board/BoardWrite";
import { BoardWrap } from "styles/board/Board.style";
import { BoardDetailWrap } from 'styles/board/BoardDetail.style';

//글작성 화면
const WritePage = () => {
    return (
        <BoardDetailWrap>
            <BoardWrite />
        </BoardDetailWrap>
    )
}

export default WritePage;