import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

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

const BoardCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows:false,
        slidesToShow: 10,
        slidesToScroll: 1
    };

    return (
        <CarouselWrap>
            <Slider {...settings} style={{width:'100%'}}>
                <div>데이터1</div>
                <div>데이터2</div>
                <div>데이터3</div>
                <div>데이터4</div>
                <div>데이터5</div>
                <div>데이터6</div>
                <div>데이터7</div>
                <div>데이터8</div>
                <div>데이터9</div>
                <div>데이터10</div>
                <div>데이터11</div>
                <div>데이터12</div>
                <div>데이터13</div>
                <div>데이터14</div>
                <div>데이터15</div>
            </Slider>
        </CarouselWrap>
    )
}

export default BoardCarousel;