import { Aside } from 'component/Aside';
import { Search } from 'component/Search';
import React from 'react';
import { FaCrown } from 'react-icons/fa';
import styled from 'styled-components';

const HomeComponent = () => {

    const MainWrap = styled.div`
        display: flex;
        flex-direction: column;
        border-top: 1px solid #d4d4d4;
        max-width:1140px;
        box-sizing: border-box;
        margin:0 auto;
        
        @media screen and (min-width: 1100px){
            flex-direction: row;
            border-top: none;
            padding: 40px 20px 0;
        }
    `
    const Main = styled.div`
        @media screen and (min-width: 1100px){
            width:736px;
            min-height : 800px;
        }
    `
    const Title = styled.h2`
        position: relative;
        border-bottom: 1px solid #eee;
        font-weight: 700;
        height: 54px;
        padding-right: 0;
        padding-left: 34px;
        line-height: 54px;

        @media screen and (min-width: 1100px){
            height: 45px;
            padding-right: 52px;
            padding-left: 35px;
            border-bottom-width: 2px;
            font-size: 18px;
            line-height: 43px;
        }
    `
    const ArticleList = styled.div`
        display: flex;
        flex-wrap: wrap;
        border-top:8px solid #f2f2f3;

        @media screen and (min-width:1100px){
            border-top: none;
        }
    `
    const TopicList = styled.div`
        position: relative;
        width:calc(100%-40px);
        padding:0 20px;
        border-bottom:8px solid #f2f2f3;

        @media screen and (min-width:1100px){
            width:calc(50%-20px);
            margin-top:45px;
            padding:0;
            border-bottom: none;

            &:nth-of-type(2n){
                margin-right:20px;
            }
            &:nth-of-type(odd){
                margin-left:20px;
            }
        }


    `
    const Topic = styled(TopicList)`
        display: block;
    `
    const BestTopic = styled(TopicList)`
        width: 100%;
        margin: 35px 0 0;
        @media screen and (min-width:1100px){
            &:nth-of-type(odd){
                margin-left:0px;
            }
        }
    `
    return (
        <MainWrap>
            <Main>
                <Search />
                <ArticleList>
                    <BestTopic>
                        <Title><FaCrown style={styleds.faIcon} />토픽 베스트</Title>
                        <a>더보기 &gt; </a>
                    </BestTopic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판1</Title>
                        <a>더보기 &gt; </a>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판2</Title>
                        <a>더보기 &gt; </a>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판3</Title>
                        <a>더보기 &gt; </a>
                    </Topic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판4</Title>
                        <a>더보기 &gt; </a>
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
        height: '32px;'

    }
}

export default HomeComponent;
