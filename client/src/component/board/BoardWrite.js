import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
    Article,
    ArticleBody,
    ArticleHead,
    ArticleInfo,
    Contents,
} from 'styles/board/BoardDetail.style';

const SelectBox = styled.select`
    box-sizing: border-box;
    width: 100px;
    height: 30px;
    text-align: center;
`;
const TitleInput = styled.input`
    border: 0;
    width: 100%;
    height: 50px;
    font-size: 22px;
`;
const SubmitButton = styled.button`
    cursor: pointer;
    background-color: #da3238;
    border-color: #da3238;
    color: #fff;
    display: inline-block;
    width: 100 px;
    height: 30 px;
    margin-left: 8 px;
    border-width: 1 px;
    border-style: solid;
    font-size: 13px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    vertical-align: top;
`;
const CancelButton = styled.button`
    cursor: pointer;
    background-color: #fff;
    border-color: #d4d4d4;
    color: #222;
    display: inline-block;
    width: 100 px;
    height: 30 px;
    margin-left: 8 px;
    border-width: 1 px;
    border-style: solid;
    font-size: 13px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    vertical-align: top;
`;
const BoardWrite = () => {
    const topicList = useSelector((state) => state.topic.result);
    const [disable, setDisable] = useState(true);
    const [topic, setTopic] = useState(0);

    const onChangeHandler = (e) => {
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
                            onChange={onChangeHandler}
                        >
                            {topicList.map((item) => (
                                <option value={item.cd_id}>
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
                        />
                    </h2>
                </ArticleHead>
                <ArticleBody>
                    <Article>
                        <ReactQuill
                            name="body"
                            theme="snow"
                            placeholder="내용을 입력하세요"
                        />
                    </Article>
                    <ArticleInfo>
                        <SubmitButton disabled={disable} type="submit">
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
