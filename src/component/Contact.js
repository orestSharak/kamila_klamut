import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {FormattedMessage} from 'react-intl';
import '../css/ViewPage.css';
class Contact extends Component {
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
                            <h1><FormattedMessage id="nav.contact"/></h1>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row no-gutter">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                        <div className="d-flex flex-column justify-content-center text-center first-section-banner">
                        <a href="mailto:someone@yoursite.com">some email</a>
                        <a href="mailto:someone@yoursite.com">some email</a>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 view-section-background first-section-banner"></div>
                </div>
                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <ScrollAnimation {...settings} animateIn="fadeInUp">
                            <h1><FormattedMessage id="nav.contact"/></h1>
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

export default Contact;