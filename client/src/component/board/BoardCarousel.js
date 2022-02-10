import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topicActions } from 'store/modules/topic';
import {
    CarouselLink,
    CarouselWrap,
    SortWrap,
    StyledSlider,
} from 'styles/board/BoardCarousel.style';

//게시판 목록(carousel)
const BoardCarousel = (props) => {
    const topicList = useSelector((state) => state.topic.result);
    const dispatch = useDispatch();
    useEffect(() => {
        // if (topicList) return;
        dispatch(topicActions.request());
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
    };

    return (
        <CarouselWrap>
            <StyledSlider {...settings} style={{ width: '90%' }}>
                {topicList.map((item) => (
                    <div key={item.cd_id}>
                        <CarouselLink to={`/topic/${item.cd_name}`}>
                            {item.cd_name}
                        </CarouselLink>
                    </div>
                ))}
            </StyledSlider>
            <SortWrap>
                <span>
                    <a to="/">설정값</a>
                </span>
            </SortWrap>
        </CarouselWrap>
    );
};

export default BoardCarousel;
