
import { Aside } from 'component';
import { Search } from 'component/Search';
import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ArticleList, BestTopic, Main, MainWrap, Title, Topic, TopicLink } from 'styles/Home.style';
import styled, { css } from 'styled-components';
import { StyledLink } from 'styles/Global.style';


const HomeComponent = () => {

    const Article = styled.div`
        display: block;
        color: #222;
        font-size: 14px;
        word-wrap: break-word;
        line-height: 1.25em;
        margin: 0;
        position: relative;
        padding: 12px 0;
        border-bottom:1px solid #f5f5f5;

        @media screen and (min-width : 1100px){
            padding: 0;
            border-bottom: none;

            &:first-of-type{
                padding-top: 9px;
            }
        }
    `

    const ArticleBest = styled(Article)`
        padding: 11px 0;

        @media screen and (min-width : 1100px){
            display: flex;
            margin-top: 2px;
            padding: 0 120px 0 0;

            &:first-of-type{
                padding-top: 11px;
            }
        }
    `
    const ArticleTag = styled.span`
        display: none;

        ${StyledLink}{
            color: #94969b;
            cursor: pointer;
            text-decoration: none;
            
            @media screen and (min-width : 1100px){
                display: inline-block;
                padding:0 6px 0 7px;
            }
        }
    `
    const img = css`
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: -166px -600px;
    `
    const link = css`
        background: url('https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png') no-repeat;
        background-size: 600px 900px;
        background-position: -114px -600px;
    `
    const ArticleBestTag = styled(ArticleTag)`
        display: block;
        font-size: 12px;

        @media screen and (min-width : 1100px){
            display:block;
            height:20px;
            margin: 5px 4px 0 0;
            border : 1px solid #eee;
            vertical-align: middle;
            line-height: 18px;
            box-sizing: border-box;
            white-space: nowrap;
        }
    `
    const ArticleTitle = styled(StyledLink)`
        display: inline-block;
        font-size: 14px;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &::before{
            display : inline-block;
            width:16px;
            height:16px;
            margin : 3px 3px 0 0;
            vertical-align: top;

            @media screen and (min-width : 1100px){
                margin-top: 8px;
            }
            ${(props) => props.etc === "img" ? { img } : props.etc === "link" ? { link } : null}
        }
    `


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
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </ArticleBest>
                        <ArticleBest>
                            <ArticleBestTag><StyledLink to="/topic/토픽베스트">암호화폐</StyledLink></ArticleBestTag>
                            <ArticleTitle to="/post/제목" etc="img">제목</ArticleTitle>
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </ArticleBest>
                        <ArticleBest>
                            <ArticleBestTag><StyledLink to="/topic/토픽베스트">암호화폐</StyledLink></ArticleBestTag>
                            <ArticleTitle to="/post/제목">제목</ArticleTitle>
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </ArticleBest>
                        <TopicLink to="/topic/best">더보기</TopicLink>
                    </BestTopic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판1</Title>
                        <TopicLink to="/topic/1">더보기</TopicLink>
                        <Article>
                            <ArticleTag><StyledLink to="/topic/토픽베스트">암호화폐</StyledLink></ArticleTag>
                            <Link to="/post/제목">제목</Link>
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </Article>
                        <Article>
                            <ArticleTag><Link to="/topic/토픽베스트">암호화폐</Link></ArticleTag>
                            <Link to="/post/제목">제목</Link>
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </Article>
                        <Article>
                            <ArticleTag><Link to="/topic/토픽베스트">암호화폐</Link></ArticleTag>
                            <Link to="/post/제목">제목</Link>
                            <div>
                                <Link to="/like/제목"><i>좋아요</i></Link>
                                <Link to="/post/제목"><i>댓글</i></Link>
                            </div>
                        </Article>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판2</Title>
                        <TopicLink to="/topic/1">더보기</TopicLink>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판3</Title>
                        <TopicLink to="/topic/1">더보기</TopicLink>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판4</Title>
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
