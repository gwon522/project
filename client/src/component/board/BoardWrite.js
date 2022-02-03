import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Article, ArticleBody, ArticleHead, ArticleInfo, Contents } from "styles/board/BoardDetail.style";
import { StyledLink } from "styles/Global.style";


const BoardWrite = () => {
    const [text, setText] = useState("");
    const textHandler = (text) => {
        setText(text);
    }
    return (
        <Contents>
            <form>
                <ArticleHead>
                    <h1>
                        <select>
                            <option>dd</option>
                            <option>dd</option>
                            <option>dd</option>
                            <option>dd</option>
                            <option>dd</option>
                        </select>
                    </h1>
                    <h2>
                        <input type="text" placeholder="제목을 작성해주세요" />
                    </h2>
                </ArticleHead>
                <ArticleBody>
                    <Article>
                        <ReactQuill theme="snow" placeholder="내용을 입력하세요" value={text} onChange={textHandler} />
                    </Article>
                    <ArticleInfo>
                        <button>글작성</button>
                        <button>취소</button>
                    </ArticleInfo>
                </ArticleBody>
            </form>
        </Contents>
    )

}


export default BoardWrite;