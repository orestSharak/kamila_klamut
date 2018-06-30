import React, {Component} from 'react';
import '../css/Home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ScrollAnimation from 'react-animate-on-scroll';
import datas from '../api/CarouselApi';

class Carousel extends Component {
    render() {
        const settings = {
          draggable:true,
            autoplay: true,
            autoplaySpeed: 8000,
            arrows: false,
            fade:true,
            speed:500,
            dots: false,
            infinite: true,
            cssEase: 'ease-in',
            pauseOnFocus:false,
            pauseOnHover:false
        };
        const animationSettings = {
            offset:0,
            duration:.6,
            delay:.3,
            animateOnce:false
        };
        return (
            <div>
                <Slider {...settings}>
                    {datas.map((data, index) =>
                        <div key={index} className="slideshow">
                            <div className="slider">
                                <div className="item">
                                    <h1 className="carousel-description">
                                        {data.caption}
                                    </h1>
                                    <p className="carousel-description-text">
                                        {data.text}
                                    </p>
                                    <span style={{backgroundImage:`url(${data.src})`}}></span>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

export default Carousel;