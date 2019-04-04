import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav,Row} from 'react-bootstrap';
import logo from '../../assets/img/logo_vela.svg';
import logo_text from '../../assets/img/logo_font.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import  './header.css';

class Header extends Component {
    state = {
        // lang: this.props.lang,
        // mobile: this.props.mobile
        lang: 'En',
        page: this.props.page
    };

    langToggle = () => {
        this.state.lang === 'En' ? this.setState({lang: 'Ru'}) : this.setState({lang: 'En'});
    }

    render() {
    const { lang } = this.state;
    const page = this.state.page;

        return <header >
        <ReactCSSTransitionGroup
            transitionName="header"
            transitionAppear={true}
            transitionAppearTimeout={100}
            transitionEnter={false}
            transitionLeave={false}
        >
        <Row>
            <Nav className={"navbar w-100 d-flex " + page }>
                <div className="logo-pic">
                    <img src={logo} alt="..." />
                </div>
                <div className="logo-text">
                    <img src={logo_text} alt="..." style={{paddingLeft:'15px'}} />
                </div>
                <li className={"nav-item toggle desktop ml-auto " + (page === 'cantina' && 'active') }>
                  <Link className="nav-link" to="/cantina">Cantina</Link>
                </li>
                <li className={"nav-item toggle desktop " + (page === 'tacos' && 'active') }>
                  <Link className="nav-link" to="/tacos">Tacos Y Tragos</Link>
                </li>
                <li className="nav-item ml-lg-auto nav-book" >
                    <Link className="nav-link" to="#book">Book a&nbsp;table</Link>
                </li>
                <li className="nav-item nav-lang desktop">
                  <Link className="nav-link" to="#lang" onClick={this.langToggle}>{ lang }</Link>
                </li>
            </Nav>
            <div className="mobile subnav">
                <Link className={"nav-link " + (page === 'cantina' ? 'active' : '') }to="/tacos">Tacos Y Tragos</Link>
                <Link className={"nav-link " + (page === 'cantina' ? 'active' : '')} to="/cantina">Cantina</Link>
            </div>
        </Row>
    </ReactCSSTransitionGroup>
    </header>
    }
}
export default Header;
