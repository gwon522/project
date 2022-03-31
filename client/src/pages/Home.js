
import React, { useEffect } from 'react';
import { Aside, Search } from 'component/index';
import { ArticleList, Main, MainWrap } from 'styles/Home.style';
import { BestTopics, Topics } from 'component/Topic/index'
import { useSelector, useDispatch } from 'react-redux';
import { topicActions } from '../store/modules/topic';
import { Chart } from 'component/Aside/Chart';
import { RankData } from "utils/TempData";
import { ChartItem } from '../component/Aside/ChartItem';
import { Banner } from 'component/Aside/Banner';

//메인화면
const HomeComponent = () => {
    const topicList = useSelector(state => state.topic.result);
    const dispatch = useDispatch();
    useEffect(() => {
        if (topicList.length !== 0) return;
        dispatch(topicActions.request());
    }, [topicList, dispatch]);

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
            <Aside>
                <Banner />
                <Chart>
                    {RankData.map(data => <ChartItem key={data.seq} data={data} />)}
                </Chart>
            </Aside>
        </MainWrap>
    );
}

export default HomeComponent;
