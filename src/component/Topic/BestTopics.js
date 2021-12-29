import { BestTopic, Title, ArticleBest, ArticleBestTag, ArticleTitle, BestInfoWrap, FuncLink, TopicLink, styleds } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { StyledLink } from 'styles/Global.style';
import { HideI } from '../../styles/Home.style';

export const BestTopics = (props) => {
    const Data = props.data;
    return (
        <BestTopic>
            <Title><FaCrown style={styleds.faIcon} />토픽 베스트</Title>
            <ArticleBest>
                <ArticleBestTag><StyledLink to="/topic/토픽베스트">암호화폐</StyledLink></ArticleBestTag>
                <ArticleTitle to="/post/제목" etc="link">
                    제목
                </ArticleTitle>
                <BestInfoWrap>
                    <FuncLink to="/like/제목" func="like"><HideI>좋아요</HideI>123</FuncLink>
                    <FuncLink to="/post/제목" func="cmt"><HideI>댓글</HideI>22</FuncLink>
                </BestInfoWrap>
            </ArticleBest>
            <TopicLink to="/topic/best">더보기</TopicLink>
        </BestTopic>
    )
}