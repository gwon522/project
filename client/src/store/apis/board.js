import { request } from 'utils/axios';

//글작성
export async function boardWriteAPI(sendData) {
    return await request("post", `/api/write`, sendData);
};

//게시판 글목록 조회(토픽명에 따른)
export default async function boardListAPI(sendData) {
    return await request("post", `/api/topic/:id`, sendData);
}
export async function boardDetailAPI(sendData) {
    return await request("get", `/api/post/:id`, sendData).then(result => result[0]);
}