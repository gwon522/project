import axios from 'axios';

export default async function LoginAPI(sendData) {
    console.log(sendData);
    return axios.post('/user/login', sendData).then(result => result.data);
}