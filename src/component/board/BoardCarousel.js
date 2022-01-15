import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { StyledLink } from 'styles/Global.style';
import { CarouselData } from 'utils/TempData';

const CarouselWrap = styled.div`
    display:none;
    width:100%;
    overflow:hidden;

    @media screen and (min-width:1100px){
        display: flex;
        position: relative;
        height: 33px;
        padding-top: 9px;
        /* flex-direction:row; */
        &:before{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #eee;
            content: "";
        }
    }
`
const StyledSlider = styled(Slider)`
    width:100%;

    .slick-list{
        width:100%;
        height: 100%;
        margin: 0;
        overflow-x: hidden;
    }

    .slick-slide div{
        cursor:pointer;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;

        @media screen and (min-width:1100px){
            display: inline-block;
            position: relative;
            width: auto!important;
            height: 31px;
            margin: 0 12px;
            border-bottom: 2px solid transparent;
            font-size: 14px;

        }
    }
`
const CarouselLink = styled(StyledLink)`
    @media screen and (min-width:1100px){
        font-weight:700;
        color:#222;
    }
`
const SortWrap = styled.div`
    
    @media screen and (min-width:1100px){
        position: relative;
        width: 132px;
        &:before{
            position: absolute;
            top: 4px;
            left: 0;
            width: 1px;
            height: 12px;
            background: #ccc;
            content: "";
        }
    }
`

const BoardCarousel = (props) => {
    const list = CarouselData;
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