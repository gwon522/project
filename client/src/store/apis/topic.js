import axios from "axios";

export default async function topicAPI() {
    const data = await axios.get("/api/topicList").then(result => { return result.data });
    return data;
};
