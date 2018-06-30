import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from "./Home";
import About from "../component/About";
import News from "../component/News";
import Performances from "../component/Performances";
import Reviews from "../component/Reviews";
import Workshop from "../component/Workshop";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";
import Header from "../component/header/Header";
import ReviewView from "../component/ReviewView";
import PerformanceView from "../component/PerformanceView";
import LanguageButton from './header/LanguageButton';

class App extends Component {
    render() {
        return(
            <Router>
                <Route
                    render={({location}) => (
                        <div>
                            <LanguageButton changeLocale={this.props.changeLocale}/>
                            <Header/>
                            <Route component={ScrollToTop}/>
                            <div>
                                <TransitionGroup>
                                    <CSSTransition key={location.key} classNames="fade"
                                                   timeout={{enter: 1000, exit: 1000}}>
                                        <Switch location={location}>
                                            <Route exact path="/" component={Home}/>
                                            <Route path="/about" component={About}/>
                                            <Route path="/news" component={News}/>
                                            <Route path="/performances" component={Performances}/>
                                            <Route path="/performanceview/:id" component={PerformanceView}/>
                                            <Route path="/reviews" component={Reviews}/>
                                            <Route path="/reviewview/:id" component={ReviewView}/>
                                            <Route path="/workshop" component={Workshop}/>
                                            <Route path="/gallery" component={Gallery}/>
                                            <Route path="/contact" component={Contact}/>
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            </div>
                        </div>
                    )}
                />
            </Router>
        )
    }
}

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

export default App;