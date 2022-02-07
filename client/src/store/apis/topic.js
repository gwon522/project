import axios from "axios";

export default async function topicAPI() {
    return await axios.get("/api/topicList").then(result => { return result.data });
};

export async function bestTopicListAPI() {
    return await axios.get('/api/bestTopic').then(result => { return result.data });
}

export async function TopicListAPI() {
    return await axios.get('/api/topic').then(result => { return result.data });
}