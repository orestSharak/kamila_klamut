import React, {Component} from 'react';
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    handleMouseDown() {
        this.toggleMenu();
        console.log("clicked");
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu menuVisibility={this.state.visible}
                      handleMouseDown={this.handleMouseDown}/>
            </div>
        )
    }
}

export default Header;