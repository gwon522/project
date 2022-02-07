import axios from 'axios';
import { json } from 'body-parser';

const Api = axios.create({
    baseURL: `localHost:5050`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const DataLoader = async (method, uri, data) => {
    switch (method) {
        case 'get':
            return await Api.get(uri);
        case 'post':
            return await Api.post(uri, JSON.stringify(data)).then(
                (result) => result.data,
            );
        case 'delete':
            return await Api.delete(uri, json.stringify(data));
        case 'patch':
            return await Api.patch(uri, json.stringify(data));
        default:
            throw Error('not exist Method');
    }
};
