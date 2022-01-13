import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BoardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
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
        </div>
    )
}

export default BoardCarousel;