import axios from 'axios';

export default async function boardWriteAPI(sendData) {
    const data = await axios.post("/api/write", sendData).then(result => { console.log(result) });
    return data;
};
