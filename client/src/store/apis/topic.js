import axios from "axios";
import { request } from 'utils/axios';

export default async function topicAPI() {
    return await request("get", `/api/topicList`);
    // axios.get("/api/topicList").then(result => result.data);
};

export async function bestTopicListAPI() {
    return await request("get", `/api/bestTopic10`);
    //  axios.get('/api/bestTopic10').then(result => result.data);
}

export async function TopicListAPI(sendData) {
    return await request("get", `/api/topic5`, sendData);

}