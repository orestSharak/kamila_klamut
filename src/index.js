import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import {flattenMessages} from "./component/utils/Utils";
import messages from './api/messages';
import 'animate.css/animate.min.css';
import './css/index.css';
import App from './component/App';


addLocaleData([...en, ...pl]);

let locale =
    'pl-PL'
    || (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage;


class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: locale
        };

        this.changeLocale = this.changeLocale.bind(this)
    }

    changeLocale(locale) {
        this.setState({'locale': locale})
    }


    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={flattenMessages(messages[this.state.locale])}>
                <App changeLocale={this.changeLocale}/>
            </IntlProvider>
        )
    }
}

ReactDOM.render(
    <Wrapper/>,
    document.getElementById('root'));

