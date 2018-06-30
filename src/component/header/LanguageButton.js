import React, {Component} from "react";


class LanguageButton extends Component {

    render() {

        return (
            <div>
                <button onClick={() => this.props.changeLocale('en-US')}>en</button>
                <button onClick={() => this.props.changeLocale('pl-PL')}>pl</button>
            </div>
        )
    }

}


export default LanguageButton;