import { BestTopic, Title, ArticleBest, ArticleBestTag, ArticleTitle, BestInfoWrap, FuncLink, styleds, DetailLink } from 'styles/Home.style';
import { FaCrown } from 'react-icons/fa';
import { StyledLink } from 'styles/Global.style';
import { useEffect, useState } from 'react';
import { bestTopicListAPI } from 'store/apis/topic';


export const BestTopics = (props) => {
    const [bestTopic, setBestTopic] = useState([]);
    useEffect(() => {
        bestTopicListAPI().then(result => setBestTopic(result));
    }, []);

    return (
        <BestTopic>
            <Title><FaCrown style={styleds.faIcon} />토픽 베스트</Title>
            {bestTopic.length !== 0 ?
                bestTopic.map((data, index) =>
                    <ArticleBest key={index}>
                        <ArticleBestTag><StyledLink to={`/topic/${data.cd_name}`}>{data.cd_name}</StyledLink></ArticleBestTag>
                        <ArticleTitle to={`/post/${data.b_id}`} etc="link">
                            {data.b_title}
                        </ArticleTitle>
                        <BestInfoWrap>
                            <FuncLink to={`/post/${data.b_id}`} func="like">{data.likes}</FuncLink>
                            <FuncLink to={`/post/${data.b_id}`} func="cmt">{data.comment}</FuncLink>
                        </BestInfoWrap>
                    </ArticleBest>
                )
                :
                <ArticleBest>
                    <ArticleTitle to='/' etc="link">
                        게시글이 없습니다.
                    </ArticleTitle>
                </ArticleBest>
            }

            <DetailLink to="/topic/토픽베스트">더보기</DetailLink>
        </BestTopic>
    )
}