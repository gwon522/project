
import React, { useEffect, useState } from 'react';
import { Topic, Title, Article, NormalInfoWrap, FuncLink, TopicLink, styleds, DetailLink } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { TopicListAPI } from 'store/apis/topic';

export const Topics = (props) => {
    const { cd_id, cd_name } = props;
    const [topicList, setTopicList] = useState([]);

    useEffect(() => {
        const sendData = {
            cd_id: cd_id,
            limit: 5
        }
        TopicListAPI(sendData).then(result => setTopicList(result));
    }, [])


    return (
        <Topic>
            <Title><FaCrown style={styleds.faIcon} />{cd_name}</Title>
            {
                topicList.length !== 0 ?
                    topicList.map((item, i) =>
                        <Article key={i}>
                            <TopicLink to={`/post/${item.b_id}`}>{item.b_title}</TopicLink>
                            <NormalInfoWrap>
                                <FuncLink to={`/post/${item.b_id}`}>{item.b_view}</FuncLink>
                            </NormalInfoWrap>
                        </Article>
                    )
                    :
                    <Article>
                        <TopicLink to="/">게시글이 존재하지 않습니다.</TopicLink>
                    </Article>
            }
            <DetailLink to={`/topic/${cd_name}`}>더보기</DetailLink>
        </Topic>
    )
}