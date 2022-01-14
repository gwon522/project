import { BestTopic, Title, ArticleBest, ArticleBestTag, ArticleTitle, BestInfoWrap, FuncLink, styleds, DetailLink } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { StyledLink } from 'styles/Global.style';
import { HideI } from '../../styles/Home.style';
import { BestData } from '../../utils/TempData';

export const BestTopics = (props) => {
    const TempTopicData = BestData;
    return (
        <BestTopic>
            <Title><FaCrown style={styleds.faIcon} />토픽 베스트</Title>
            {TempTopicData.map((data, index) =>
                <ArticleBest key={index}>
                    <ArticleBestTag><StyledLink to="/topic/토픽베스트">{data.category}</StyledLink></ArticleBestTag>
                    <ArticleTitle to="/post/제목" etc="link">
                        {data.title}
                    </ArticleTitle>
                    <BestInfoWrap>
                        <FuncLink to="/like/제목" func="like"><HideI>좋아요</HideI>{data.like}</FuncLink>
                        <FuncLink to="/post/제목" func="cmt"><HideI>댓글</HideI>{data.cmt}</FuncLink>
                    </BestInfoWrap>
                </ArticleBest>
            )}

            <DetailLink to="/topic/best">더보기</DetailLink>
        </BestTopic>
    )
}