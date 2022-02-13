import axios from 'axios';

//글작성
export default async function boardWriteAPI(sendData) {
    return await axios.post("/api/write", sendData).then(result => result.data);
};

//게시판 글목록 조회(토픽명에 따른)
export async function boardListAPI(sendData) {
    return await axios.get('/api/topic/:id', sendData).then(result => result.data);
}