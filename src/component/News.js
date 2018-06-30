import React, {Component} from 'react';
import '../css/Home.css';
import Carousel from "./Carousel";
import ScrollAnimation from 'react-animate-on-scroll';


class News extends Component {
    render() {
        const settings = {
            duration:.6,
            delay:.3,
            animateOnce:true
        };
        return (
            <div>
                <div className="row no-gutter">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12  bg-dark  first-section-banner"></div>
                    <div
                        className="col-2 d-none d-md-block d-sm-block d-lg-block   bg-white  first-section-side "></div>
                </div>
                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                            <h1>News</h1>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row no-gutter">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12  bg-dark  first-section-banner">
                        <Carousel />
                    </div>
                    <div
                        className="col-2 d-none d-md-block d-sm-block d-lg-block   bg-white  first-section-side "></div>
                </div>


                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <h1 >News</h1>
                    </div>
                </div>
                <div className="row no-gutter bg-dark">
                    <div className="col-10 footer"></div>
                    <div className="col-2 d-lg-block bg-white"></div>
                </div>
            </div>
        )
    }
}

export default News;