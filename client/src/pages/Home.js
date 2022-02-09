
import React, { useEffect } from 'react';
import { Aside, Search } from 'component/index';
import { ArticleList, Main, MainWrap } from 'styles/Home.style';
import { BestTopics, Topics } from 'component/Topic/index'
import { TopicData } from 'utils/TempData';
import { useSelector, useDispatch } from 'react-redux';
import { topicActions } from '../store/modules/topic';

const HomeComponent = () => {
    const topicList = useSelector(state => state.topic.result);
    const dispatch = useDispatch();
    useEffect(() => {
        if (topicList.length !== 0) return;
        dispatch(topicActions.request());
    }, [topicList]);

    return (
        <MainWrap>
            <Main>
                <Search />
                <ArticleList>
                    <BestTopics />
                    {
                        topicList.map((data, i) =>
                            <Topics key={i} {...data} />
                        )
                    }
                </ArticleList>
            </Main>
            <Aside />
        </MainWrap>
    );
}

export default HomeComponent;
