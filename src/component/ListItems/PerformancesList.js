import React from 'react';
import {Link} from 'react-router-dom';
import datas from "../../api/PerformancesApi";
import ScrollAnimation from 'react-animate-on-scroll';

const PerformancesList = ({match}) => {
    const settings = {
        duration:.8,
        delay:.3,
        animateOnce:true
    };
    return (
        <div>
            {datas.map((data, index) =>
                index % 2
                    ?
                    <div key={index} className="section-hover">
                        <Link to={{
                            pathname: `/performanceview/${data.id}`
                        }} style={{ textDecoration: 'none' }}>
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
                                    {data.caption}
                                    </ScrollAnimation>
                                </h1>

                                <div className="col-2  d-lg-block "></div>
                            </div>
                        </Link>
                    </div>
                    :
                    <div key={index} className="section-hover">
                        <Link to={{
                            pathname: `/performanceview/${data.id}`
                        }} style={{ textDecoration: 'none' }}>
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
                                    {data.caption}
                                    </ScrollAnimation>
                                </h1>
                                <div className="col-2 bg-white "></div>
                            </div>
                        </Link>
                    </div>
            )}
        </div>
    )
};
export default PerformancesList;