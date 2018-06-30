import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {FormattedMessage} from 'react-intl';
import './Menu.css';

class Menu extends Component {
    render() {
        let visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="slideMenu" className={visibility}
                 onClick={this.props.handleMouseDown}>
                <NavLink exact to="/"><FormattedMessage id="nav.home"/></NavLink>
                <NavLink exact to="/about"><FormattedMessage id="nav.about"/></NavLink>
                <NavLink exact to="/news"><FormattedMessage id="nav.news"/></NavLink>
                <NavLink exact to="/performances"><FormattedMessage id="nav.performances"/></NavLink>
                <NavLink exact to="/reviews"><FormattedMessage id="nav.reviews"/></NavLink>
                <NavLink exact to="/workshop"><FormattedMessage id="nav.workshop"/></NavLink>
                <NavLink exact to="/gallery"><FormattedMessage id="nav.gallery"/></NavLink>
                <NavLink  to="/contact"><FormattedMessage id="nav.contact"/></NavLink>
            </div>
        )
    }
}
export default Menu;