import React, {Component} from 'react';
import photos from '../api/PhotosApi';
import {FormattedMessage} from 'react-intl';
import '../css/Home.css';
import ResponsiveGallery from "./ResponsiveGallery";


class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="row no-gutter">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12  bg-dark  first-section-banner-half"></div>
                    <div
                        className="col-2 d-none d-md-block d-sm-block d-lg-block   bg-white  first-section-side first-section-banner-half "></div>
                </div>
                {/*-------  main title section --------*/}
                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <h1><FormattedMessage id="nav.gallery"/></h1>
                    </div>
                </div>
                <div className="row no-gutter">
                    <div className="col-12 col-sm-10 col-md-10 col-lg-10">
                        <ResponsiveGallery images={photos.map(({src, thumbnail, caption}) => ({
                            src,
                            thumbnail,
                            caption,
                        }))}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;