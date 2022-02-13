import axios from "axios";

export default async function topicAPI() {
    return await axios.get("/api/topicList").then(result => result.data);
};

export async function bestTopicListAPI() {
    return await axios.get('/api/bestTopic10').then(result => result.data);
}

export async function TopicListAPI(sendData) {
    return await axios.get('/api/topic5', { params: sendData }).then(result => result.data);
}