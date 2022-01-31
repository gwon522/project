import React from 'react';
import { useSelector } from 'react-redux';
import { CarouselLink, CarouselWrap, SortWrap, StyledSlider } from 'styles/board/BoardCarousel.style';
import { CarouselData } from 'utils/TempData';



const BoardCarousel = (props) => {
    const list = CarouselData;
    const { data, loading } = useSelector(state => console.log(state));



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false
    };

    return (
        <CarouselWrap>
            <StyledSlider {...settings} style={{ width: '90%' }}>
                {list.map(item => <div ><CarouselLink to={item.link}>{item.name}</CarouselLink></div>)}
            </StyledSlider>
            <SortWrap>
                <span><a>ddd</a></span>
            </SortWrap>
        </CarouselWrap>
    )
}

export default BoardCarousel;