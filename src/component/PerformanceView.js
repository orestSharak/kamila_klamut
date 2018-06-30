import React from 'react';
import '../css/index.css';
import '../css/Home.css';
import '../css/ViewPage.css';
import datas from "../api/PerformancesApi";


const PerformaceView = ({match}) => {
    const data = datas.find(({id}) =>
        id === match.params.id);

    return (
        <div>
            <div className="row no-gutter">
                <div
                    className="d-flex col-md-10 col-sm-10 col-xs-12 mask  first-section-banner"></div>
                <div
                    className="col-md-2 col-sm-2  d-none d-md-block d-sm-block d-lg-block  bg-white  first-section-side "></div>
            </div>
            <div className="row no-gutter section-transparent-text-fit">
                <div className="col-2 d-none d-md-block d-sm-block d-lg-block bg-white"></div>
                <h1 className="col-md-8 col-sm-8 col-xs-12 align-self-end cover-title transparent-title">
                    {data.id}
                </h1>
                <div className="col-2 d-none d-md-block d-sm-block d-lg-block "></div>
            </div>
            <div className="row no-gutter justify-content-center">
                <div className="col-md-8 col-sm-8 col-xs-12 text-block">
                    <p>{data.text}
                    </p>
                </div>
            </div>
            <div className="full-page-banner bg-light mask"></div>
            {/* --------------first type ----------*/}
            <div className="row no-gutter flex-wrap">
                <div className="col-2 bg-dark view-section"></div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-10 col-10  bg-white  view-section">
                    <p className="align-self-center ">{data.text}</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-10 col-10  mask view-section"></div>
                <div className="col-2 d-lg-none d-md-none d-sm-block   bg-white view-section"></div>
            </div>
            {/*-----------------second type -------*/}
            <div className="row no-gutter flex-wrap">
                <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block mask view-section"></div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-10 col-10  bg-white  view-section">
                    <p className="align-self-center ">{data.text}</p>
                </div>
                <div className="col-2 bg-dark view-section"></div>
                <div className="col-2 d-sm-block d-lg-none d-md-none bg-white view-section"></div>
                <div className="col-10 d-sm-block d-lg-none d-md-none mask view-section"></div>
            </div>
            {/*-------------------------------------*/}
            {/* --------------first type ----------*/}
            <div className="row no-gutter flex-wrap">
                <div className="col-2 bg-dark view-section"></div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-10 col-10  bg-white  view-section">
                    <p className="align-self-center ">{data.text}</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-10 col-10  mask view-section"></div>
                <div className="col-2 d-lg-none d-md-none d-sm-block   bg-white view-section"></div>
            </div>
            {/*-----------------second type -------*/}
            <div className="row no-gutter flex-wrap">
                <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block mask view-section"></div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-10 col-10  bg-white  view-section">
                    <p className="align-self-center ">{data.text}</p>
                </div>
                <div className="col-2 bg-dark view-section"></div>
                <div className="col-2 d-sm-block d-lg-none d-md-none bg-white view-section"></div>
                <div className="col-10 d-sm-block d-lg-none d-md-none mask view-section"></div>
            </div>
            {/*-------------------------------------*/}
            <div className="full-page-banner mask"></div>
            <div className="row no-gutter view-section">
                <div className="col-2 bg-dark"></div>
                <div className="d-flex col-lg-8 col-md-8 col-sm-10 col-10">
                    <p className="align-self-center ">{data.text}</p>
                </div>
            </div>
            <div className="row no-gutter">
                <div className="col-12 title-section">
                    <h1>View</h1>
                </div>
            </div>
            <div className="row no-gutter bg-dark">
                <div className="col-10 footer"></div>
                <div className="col-2 d-lg-block bg-white"></div>
            </div>
        </div>
    )
}

export default PerformaceView;