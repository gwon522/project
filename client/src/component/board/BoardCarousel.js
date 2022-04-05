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
    const id = props.id;
    const topicList = useSelector((state) => state.topic.result);
    const dispatch = useDispatch();
    useEffect(() => {
        // if (topicList) return;
        dispatch(topicActions.request());

    }, [dispatch]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
    };

    return (
        <CarouselWrap>
            <StyledSlider {...settings} style={{ width: '90%' }}>
                {topicList.map((item) => (
                    <div key={item.cd_id} to={`/topic/${item.cd_name}`}>
                        <CarouselLink to={`/topic/${item.cd_name}`} cd_name={item.cd_name} props={id} >
                            {item.cd_name}
                        </CarouselLink>
                    </div>
                ))}
            </StyledSlider>
            <SortWrap>
                <span>
                    <a href="/">설정값</a>
                </span>
            </SortWrap>
        </CarouselWrap >
    );
};

export default BoardCarousel;
