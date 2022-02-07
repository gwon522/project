import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import {
    Article,
    ArticleBody,
    ArticleHead,
    ArticleInfo,
    Contents,
} from 'styles/board/BoardDetail.style';
import { useEffect } from 'react';
import { CancelButton, SelectBox, TitleInput } from 'styles/board/BoardWrite.style';
import { SubmitButton } from '../../styles/board/BoardWrite.style';
import axios from 'axios';
import boardWriteAPI from 'store/apis/board';


const modules = {
    toolbar: [
        ['image']
    ]
}

const BoardWrite = () => {
    const topicList = useSelector((state) => state.topic.result);
    const [topic, setTopic] = useState(0);
    const quillRef = useRef();
    const submitHandler = () => {
        //text 작성한것
        const description = quillRef.current.getEditor().getText();
        boardWriteAPI(description);
        console.log(quillRef.current.getEditor().clipboard);
    }

    const selectBoxChange = (e) => {
        setTopic(e.target.value);
    };



    return (
        <Contents>
            <form>
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
                            <option>dd</option>
                        </SelectBox>
                    </h1>
                    <h2>
                        <TitleInput
                            name="title"
                            type="text"
                            placeholder="제목을 작성해주세요"
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
                        <SubmitButton onClick={submitHandler} type='button'>
                            글쓰기
                        </SubmitButton>
                        <CancelButton type="button">취소</CancelButton>
                    </ArticleInfo>
                </ArticleBody>
            </form>
        </Contents>
    );
};

export default BoardWrite;
