import React, {
    Component
} from 'react';
import Lightbox from 'react-images';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

const theme = {
    // container
    container: {
        background: 'rgba(255, 255, 255, 0.9)',
    },

    // arrows
    arrow: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        fill: '#222',
        opacity: 0.6,
        transition: 'opacity 300ms',

        ':hover': {
            opacity: 1,
        },
    },
    arrow__size__medium: {

        height: 40,
        marginTop: -20,

        '@media (min-width: 768px)': {
            height: 70,
            padding: 15,
        },
    },
    arrow__direction__left: { marginLeft: 10 },
    arrow__direction__right: { marginRight: 10 },
    close: {
        fill: '#D40000',
        opacity: 0.6,
        transition: 'all 400ms',
        ':hover': {
            opacity: 1,
        },
    },

    // footer
    footer: {
        color: 'black',
    },
    footerCount: {

        display:'none'
    },


};

const masonryOptions = {
    transitionDuration: 0,
    gutter: 5,
    percentPosition: true,

};

export default class ResponsiveGallery extends Component {

    constructor(props) {

        super(props);

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }

    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    renderGallery() {
        const {
            images
        } = this.props;
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <div key={i} className={`grid-item`}>
                    <img onClick={(e) => this.openLightbox(i, e)} src={obj.thumbnail} className={`gallery-img`}/>
                </div>
            );
        });

        return (
            <Masonry
                className={'grid'} // default ''
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}>
                {gallery}
            </Masonry>

        );
    }

    render() {
        return (
            <div>

                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    showThumbnails={this.props.showThumbnails}
                    theme={theme}
                    leftArrowTitle={''}
                    rightArrowTitle={''}

                />
            </div>
        );
    }

}

ResponsiveGallery.propTypes = {
    images: PropTypes.array,
    showThumbnails: PropTypes.bool,
};
