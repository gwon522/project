import axios from 'axios';

//회원가입시 아이디 중복 체크
export async function SignUpAPI(userData) {
    return axios.post('/user/SignUp', userData).then(result => result.data);
}

export async function CheckDuplicateIdAPI(id) {
    return axios.post('/user/CheckDuplicateId', { id: id }).then(result => result.data);
}

export async function LoginAPI(sendData) {
    return axios.post('/user/login', sendData).then(result => {
        !!result.data.text && alert(result.data.text);
        return result.data
    });
}