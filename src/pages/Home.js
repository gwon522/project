
import { Aside } from 'component';
import { Search } from 'component/Search';
import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Article, ArticleBest, ArticleBestTag, ArticleList, ArticleTag, ArticleTitle, BestInfoWrap, BestTopic, FuncLink, HideI, I, Main, MainWrap, NormalInfoWrap, Title, Topic, TopicLink } from 'styles/Home.style';
import { StyledLink } from 'styles/Global.style';


const HomeComponent = () => {

    return (
        <MainWrap>
            <Main>
                <Search />
                <ArticleList>
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
                </ArticleList>
            </Main>
            <Aside />
        </MainWrap>
    );
}

const styleds = {
    faIcon: {
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        display: 'inline-block',
        width: '32px',
        height: '32px'
    }
}

export default HomeComponent;
