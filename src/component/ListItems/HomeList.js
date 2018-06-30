import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeList = ({match}) => {
    const settings = {
        duration:.8,
        delay:.3,
        animateOnce:true
    };
    return (
        <div>
            {/*------- first  ------------*/}
                    <div className="section-hover">
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <ScrollAnimation {...settings} animateIn="fadeInUp">
                            <div className="row no-gutter">
                                <div
                                    className="col-2  bg-dark  first-section-side "></div>
                                <div
                                    className="d-flex col-10 first-section-banner hidden-overflow">
                                    <div className="first-section-banner mask"></div>
                                </div>
                            </div>
                            </ScrollAnimation>
                            <div className="row no-gutter section-transparent-text-fit">
                                <div className="col-2  bg-white"></div>

                                <h1 className="col-8 align-self-end cover-title transparent-title">
                                    <ScrollAnimation {...settings} animateIn="fadeInDown">
                                        <FormattedMessage id="nav.about"/>
                                    </ScrollAnimation>
                                </h1>
                                <div className="col-2  d-lg-block "></div>
                            </div>
                        </Link>
                    </div>
                    {/*-------- second  ------------*/}
                    <div className="section-hover">
                        <Link to="/performances" style={{ textDecoration: 'none' }}>
                            <ScrollAnimation {...settings} animateIn="fadeInUp">
                            <div className="row no-gutter">
                                <div
                                    className="d-flex col-10  first-section-banner hidden-overflow" >
                                    <div className="first-section-banner mask"></div>
                                </div>
                                <div
                                    className="col-2 bg-dark  first-section-side "></div>
                            </div>
                            </ScrollAnimation>
                            <div className="row no-gutter section-transparent-text-fit">

                                <div className="col-2"></div>
                                <h1 className="col-8 align-self-end cover-title transparent-title">
                                    <ScrollAnimation {...settings} animateIn="fadeInDown">
                                        <FormattedMessage id="nav.performances"/>
                                    </ScrollAnimation>
                                </h1>
                                <div className="col-2 bg-white "></div>
                            </div>
                        </Link>
                    </div>
            {/*---------------------------*/}
            {/*------- first  ------------*/}
            <div className="section-hover">
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                    <ScrollAnimation {...settings} animateIn="fadeInUp">
                        <div className="row no-gutter">
                            <div
                                className="col-2  bg-dark  first-section-side "></div>
                            <div
                                className="d-flex col-10 first-section-banner hidden-overflow">
                                <div className="first-section-banner mask"></div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="row no-gutter section-transparent-text-fit">
                        <div className="col-2  bg-white"></div>

                        <h1 className="col-8 align-self-end cover-title transparent-title">
                            <ScrollAnimation {...settings} animateIn="fadeInDown">
                                <FormattedMessage id="nav.gallery"/>
                            </ScrollAnimation>
                        </h1>
                        <div className="col-2  d-lg-block "></div>
                    </div>
                </Link>
            </div>
            {/*-------- second  ------------*/}
            <div className="section-hover">
                <Link to="/reviews" style={{ textDecoration: 'none' }}>
                    <ScrollAnimation {...settings} animateIn="fadeInUp">
                        <div className="row no-gutter">
                            <div
                                className="d-flex col-10  first-section-banner hidden-overflow" >
                                <div className="first-section-banner mask"></div>
                            </div>
                            <div
                                className="col-2 bg-dark  first-section-side "></div>
                        </div>
                    </ScrollAnimation>
                    <div className="row no-gutter section-transparent-text-fit">

                        <div className="col-2"></div>
                        <h1 className="col-8 align-self-end cover-title transparent-title">
                            <ScrollAnimation {...settings} animateIn="fadeInDown">
                                <FormattedMessage id="nav.reviews"/>
                            </ScrollAnimation>
                        </h1>
                        <div className="col-2 bg-white "></div>
                    </div>
                </Link>
            </div>
            {/*---------------------------*/}
        </div>
    )
};
export default HomeList;