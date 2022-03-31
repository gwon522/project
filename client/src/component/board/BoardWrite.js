import React, { useEffect, useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    Article,
    ArticleBody,
    ArticleHead,
    ArticleInfo,
} from 'styles/board/BoardDetail.style';
import { CancelButton, Quill, SelectBox, TitleInput, SubmitButton, Contents } from 'styles/board/BoardWrite.style';
import { boardWriteAPI } from 'store/apis/board';
import { useDebounce, useConfirm } from 'hooks/index';
import { topicActions } from 'store/modules/topic';
import { topicListSelector, userIdSelector } from 'utils/selector';
import { useHistory } from 'react-router-dom';


const modules = {
    toolbar: [
        ['image']
    ]
}

//게시판 글작성
const BoardWrite = () => {
    const topicList = useSelector(topicListSelector);
    const userId = useSelector(userIdSelector);
    const history = useHistory();
    const dispatch = useDispatch();
    const [topic, setTopic] = useState(1);
    const [title, setTitle] = useState('');
    const quillRef = useRef();
    const debounceTitle = useDebounce(title, 300);

    const submitHandler = () => {
        const sendData = {
            b_title: debounceTitle,
            b_content: quillRef.current.getEditor().getText(),
            b_category: topic,
            u_id: userId //로그인 기능구현하면 useSelect에서 가져다쓰거나 로컬스토리지에 저장햇다가 불러오기 
        }

        boardWriteAPI(sendData).then(result => history.push(`/post/${result.insertId}`));
        // console.log(quillRef.current.getEditor().clipboard);
    }
    const cancelHandler = useConfirm('글작성을 취소하시겠습니까?', () => { console.log('삭제처리') });

    const selectBoxChange = (e) => {
        setTopic(e.target.value);
    };

    const titleChange = (e) => {
        setTitle(e.target.value);
    }
    useEffect(() => {
        dispatch(topicActions.request());
    }, [dispatch]);

    return (
        <Contents>
            <ArticleHead>
                <h1>
                    <SelectBox
                        name="boardId"
                        value={topic}
                        onChange={selectBoxChange}
                    >
                        {topicList.map((item) => (
                            <option key={item.cd_id} value={item.cd_id}>
                                {item.cd_name}
                            </option>
                        ))}

                    </SelectBox>
                </h1>
                <h2>
                    <TitleInput
                        name="title"
                        type="text"
                        placeholder="제목을 작성해주세요"
                        onChange={titleChange}
                    />
                </h2>
            </ArticleHead>
            <ArticleBody>
                <Article>
                    <Quill
                        name="content"
                        theme="snow"
                        ref={quillRef}
                        modules={modules}
                        placeholder="내용을 입력하세요"
                    />
                </Article>
                <ArticleInfo>
                    <SubmitButton type='button' onClick={submitHandler}>
                        글쓰기
                    </SubmitButton>
                    <CancelButton type="button" onClick={cancelHandler}>취소</CancelButton>
                </ArticleInfo>
            </ArticleBody>
        </Contents>
    );
};

export default BoardWrite;
