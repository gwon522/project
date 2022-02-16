import axios from 'axios';

export default async function LoginAPI(sendData) {
    console.log(sendData);
    return axios.post('/user/login', sendData).then(result => {
        //모달 만들어서 띄우는 것도 좋을듯(수정 고려)
        !!result.data.text && alert(result.data.text);
        return result.data
    });
}