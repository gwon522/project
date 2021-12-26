
import { Aside } from 'component';
import { Search } from 'component/Search';
import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { ArticleList, BestTopic, Main, MainWrap, Title, Topic, TopicLink } from 'styles/Home.style';

const HomeComponent = () => {


    return (
        <MainWrap>
            <Main>
                <Search />
                <ArticleList>
                    <BestTopic>
                        <Title><FaCrown style={styleds.faIcon} />토픽 베스트</Title>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <div>내용들어가야함</div>
                        <TopicLink to="/topic/best">더보기</TopicLink>

                    </BestTopic>
                    <Topic>
                        <Title><FaCrown style={styleds.faIcon} />게시판1</Title>
                        <TopicLink to="/topic/1">더보기</TopicLink>
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
