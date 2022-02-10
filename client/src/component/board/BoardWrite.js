import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    Article,
    ArticleBody,
    ArticleHead,
    ArticleInfo,
    Contents,
} from 'styles/board/BoardDetail.style';
import { CancelButton, SelectBox, TitleInput } from 'styles/board/BoardWrite.style';
import { SubmitButton } from '../../styles/board/BoardWrite.style';
import boardWriteAPI from 'store/apis/board';
import useDebounce from '../../hooks/useDebounce';
import { topicActions } from 'store/modules/topic';


const modules = {
    toolbar: [
        ['image']
    ]
}

//게시판 글작성
const BoardWrite = () => {
    const topicList = useSelector((state) => state.topic.result);
    const dispatch = useDispatch();
    const [topic, setTopic] = useState(1);
    const quillRef = useRef();
    const [title, setTitle] = useState('');
    const debounceTitle = useDebounce(title, 300);

    const submitHandler = () => {
        // text 작성한것
        const sendData = {
            b_itle: debounceTitle,
            b_content: quillRef.current.getEditor().getText(),
            b_category: topic,
            u_id: 1 //로그인 기능구현하면 useSelect에서 가져다쓰거나 로컬스토리지에 저장햇다가 불러오기 
        }
        boardWriteAPI(sendData).then(result => console.log(result));
        // console.log(quillRef.current.getEditor().clipboard);
    }

    const selectBoxChange = (e) => {
        setTopic(e.target.value);
    };

    const titleChange = (e) => {
        setTitle(e.target.value);
    }
    useEffect(() => {
        dispatch(topicActions.request());
    }, []);

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
                    <ReactQuill
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
                    <CancelButton type="button">취소</CancelButton>
                </ArticleInfo>
            </ArticleBody>
        </Contents>
    );
};

export default BoardWrite;
