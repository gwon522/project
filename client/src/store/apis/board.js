import axios from 'axios';

//글작성
export default async function boardWriteAPI(sendData) {
    console.log(sendData);
    const data = await axios.post("/api/write", sendData).then(result => { console.log(result) });
    return data;
};

//게시판 글목록 조회(토픽명에 따른)
export async function boardListAPI(sendData) {
    const data = await axios.get('/api/topic/:id', sendData).then(result => { return result });
    return data;
}