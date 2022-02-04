import axios from 'axios';

export default async function homeAPI() {
    const data = await axios.get('/api/homeList').then((result) => {
        return result.data;
    });
    return data;
}
