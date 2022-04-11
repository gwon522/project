import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5050";
export const request = (method, url, data) => {
    switch (method) {
        case "post":
            return axios.post(url, data)
                .then(res => res.data)
                .catch(err => console.log(err));
        default:
            return axios({ method, url, params: data })
                .then(res => res.data)
                .catch(err => console.log(err));
    }
}