import React, {Component} from 'react';
import './MenuButton.css';

class MenuButton extends Component {
    render() {
        return (
            <div className="row no-gutter">
                <div className="col-lg-2 col-md-2 col-sm-12   button-menu-block bg-white">
                <span className="button-menu"
                      onMouseDown={this.props.handleMouseDown}>
                    Menu
                </span>
                    {/*
                    <a target="_blank"
                       href="https://www.facebook.com/kamilaklamut">F</a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCOWKb6YiqIT2i4cIRtx-bqw">Y</a>
                */}
                </div>
            </div>
        )
    }
}

export default MenuButton