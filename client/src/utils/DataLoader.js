import axios from 'axios';

const Api = axios.create({
    baseURL: `localHost:5050`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const DataLoader = (method, uri, data) => {
    switch (method) {
        case 'get':
            return Api.get(uri);
        case 'post':
            return Api.post(uri, JSON.stringify(data)).then(
                (result) => result.data,
            );
        case 'delete':
            return Api.delete(uri, json.stringify(data));
        case 'patch':
            return Api.patch(uri.json.stringify(data));
        default:
            throw Error('not exist Method');
    }
};
