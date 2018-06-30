import React, {Component} from 'react';
import '../css/Home.css';
import ReviewsList from "./ListItems/ReviewsList";

class Reviews extends Component {
    render() {
        return (
            <div>
                <div className="row no-gutter">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12  bg-dark  first-section-banner"></div>
                    <div
                        className="col-2 d-none d-md-block d-sm-block d-lg-block   bg-white  first-section-side "></div>
                </div>
                {/*-------  main title section --------*/}
                <div className="row no-gutter">
                    <div className="col-12 title-section">
                        <h1>Rewiews</h1>
                    </div>
                </div>
                <ReviewsList/>
            </div>
        )
    }
}
export default Reviews;