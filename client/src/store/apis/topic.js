import axios from "axios";

export default async function topicAPI() {
    return await axios.get("/api/topicList").then(result => { return result.data });
};

export async function bestTopicListAPI() {
    return await axios.get('/api/bestTopic').then(result => { return result.data });
}

export async function TopicListAPI(sendData) {
    return await axios.get('/api/topic', { params: sendData }).then(result => { return result.data });
}