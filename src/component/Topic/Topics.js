
import { Topic, Title, Article, ArticleTag, NormalInfoWrap, FuncLink, TopicLink, styleds } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { StyledLink } from 'styles/Global.style';
import { HideI } from '../../styles/Home.style';

export const Topics = (props) => {
    // const topic = props.topic;
    return (
        <Topic>
            <Title><FaCrown style={styleds.faIcon} />게시판1</Title>
            <Article>
                <ArticleTag><StyledLink to="/topic/토픽베스트">암호화폐</StyledLink></ArticleTag>
                <StyledLink to="/post/제목">제목</StyledLink>
                <NormalInfoWrap>
                    <FuncLink to="/post/제목"><HideI>뷰</HideI>321</FuncLink>
                </NormalInfoWrap>
            </Article>
            <TopicLink to="/topic/1">더보기</TopicLink>
        </Topic>
    )
}