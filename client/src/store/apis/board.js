import axios from 'axios';

//글작성
export async function boardWriteAPI(sendData) {
    return await axios.post("/api/write", sendData).then(result => result.data);
};

//게시판 글목록 조회(토픽명에 따른)
export default async function boardListAPI(sendData) {
    return await axios.post('/api/topic/:id', sendData).then(result => result.data);
}
export async function boardDetailAPI(sendData) {
    return await axios.get('/api/post/:id', { params: sendData }).then(result => result.data[0]);
}