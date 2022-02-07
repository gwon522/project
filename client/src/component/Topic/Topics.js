
import { Topic, Title, Article, NormalInfoWrap, FuncLink, TopicLink, styleds, DetailLink } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';

export const Topics = (props) => {
    const topicName = props.name;
    const topicList = props.data;



    return (
        <Topic>
            <Title><FaCrown style={styleds.faIcon} />{topicName}</Title>
            {topicList.map((data, i) =>
                <Article key={i}>
                    <TopicLink to={`/post/1`}>{data.title}</TopicLink>
                    <NormalInfoWrap>
                        <FuncLink to={`/post/1`}>{data.view}</FuncLink>
                    </NormalInfoWrap>
                </Article>
            )}

            <DetailLink to={`/topic/${topicName}`}>더보기</DetailLink>
        </Topic>
    )
}