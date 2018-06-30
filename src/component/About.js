import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {FormattedMessage} from 'react-intl';
import '../css/ViewPage.css';

class About extends Component {
    render() {
        const settings = {
            duration: .8,
            delay: .3,
            animateOnce: true
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
                            <h1><FormattedMessage id="nav.about"/></h1>
                        </ScrollAnimation>
                    </div>
                </div>
                {/* --------------first type ----------*/}
                <div className="row no-gutter flex-wrap">
                    <div className="col-2 bg-dark"></div>
                    <div className="d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-10 col-10  bg-white ">
                        <span className="spacer"></span>
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                        <p className="view-section-p"><FormattedMessage id="about.p1"/></p>
                        <p className="view-section-p"><FormattedMessage id="about.p2"/></p>
                        </ScrollAnimation>
                        <span className="spacer"></span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-10  bg-danger view-section-background"></div>
                    <div className="col-2 d-lg-none d-md-none d-sm-block   bg-white "></div>
                </div>
                {/*-----------------second type -------*/}
                <div className="row no-gutter flex-wrap">
                    <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block bg-danger view-section-background "></div>
                    <div className="d-flex col-lg-6 col-md-6 col-sm-10 col-10  bg-white  flex-column justify-content-center">
                        <span className="spacer"></span>
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                        <p className="view-section-p "><FormattedMessage id="about.p3"/></p>
                        <p className="view-section-p "><FormattedMessage id="about.p4"/></p>
                        <p className="view-section-p"><FormattedMessage id="about.p5"/></p>
                        </ScrollAnimation>
                        <span className="spacer"></span>
                    </div>
                    <div className="col-2 bg-dark"></div>
                    <div className="col-2 d-sm-block d-lg-none d-md-none bg-white "></div>
                    <div className="col-10 d-sm-block d-lg-none d-md-none bg-danger view-section-background"></div>
                </div>
                {/*-------------------------------------*/}
                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                            <h1><FormattedMessage id="nav.about"/></h1>
                        </ScrollAnimation>
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

export default About;