
import { Topic, Title, Article, NormalInfoWrap, FuncLink, TopicLink, styleds, DetailLink } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { HideI } from '../../styles/Home.style';

export const Topics = (props) => {
    const topicName = props.name;
    const topicList = props.data;



    return (
        <Topic>
            <Title><FaCrown style={styleds.faIcon} />{topicName}</Title>
            {topicList.map((data, i) =>
                <Article>
                    <TopicLink to={`/post/${data.seq}`}>{data.title}</TopicLink>
                    <NormalInfoWrap>
                        <FuncLink to={`/post/${data.seq}`}><HideI>뷰</HideI>{data.view}</FuncLink>
                    </NormalInfoWrap>
                </Article>
            )}

            <DetailLink to={`/topic/${topicName}`}>더보기</DetailLink>
        </Topic>
    )
}