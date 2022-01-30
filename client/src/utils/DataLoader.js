import axios from 'axios';

const settingAxios = axios.create({
    baseURL: `localHost:5050`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const DataLoader = (method, uri, data) => {
    switch (method) {
        case 'get':
            return settingAxios.get(uri);
        case 'post':
            return settingAxios
                .post(uri, JSON.stringify(data))
                .then((result) => result.data);
        default:
            throw Error('not exist Method');
    }
};
