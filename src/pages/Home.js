
import React from 'react';
import { Aside, Search } from 'component/index';
import { ArticleList, Main, MainWrap } from 'styles/Home.style';
import { BestTopics, Topics } from 'component/Topic/index'
import { TopicData } from 'utils/TempData';

const HomeComponent = () => {
    const topic = TopicData;
    //axios 사용하여 데이터 불러오기

    return (
        <MainWrap>
            <Main>
                <Search />
                <ArticleList>
                    <BestTopics />
                    {
                        //map 사용해서 Topic 반복
                        topic.map((data, i) =>
                            <Topics {...data} key={i} />
                        )
                    }
                </ArticleList>
            </Main>
            <Aside />
        </MainWrap>
    );
}

export default HomeComponent;
