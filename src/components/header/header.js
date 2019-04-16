import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
        page: this.props.page,
        mobNav: false
    };

    langToggle = () => {
        this.state.lang === 'En' ? this.setState({lang: 'Ru'}) : this.setState({lang: 'En'});
    }

    toggleMobileNav = () => {
        let that = this;
        if (that.state.page !== 'index') {
            let mobNav = !that.state.mobNav;
            that.setState({mobNav});
        }
    }

    render() {
    const { lang } = this.state;
    const page = this.state.page;

        return <header className={page} >
        <ReactCSSTransitionGroup
            transitionName="header"
            transitionAppear = { true }
            transitionAppearTimeout = { 1000 }
            transitionEnter = { false }
            transitionLeave = { false }
        >
        <Row>
            <Nav className={"navbar w-100 d-flex " + page }>
                <div className="logo-pic">
                    <img src={logo} alt="..." />
                </div>
                <div className={'logo-text mobile ' + (this.state.mobNav ? '_open' : '')}  onClick={ () => this.toggleMobileNav() }  >
                    <img src={logo_text} alt="..." style={{paddingLeft:'15px'}} />
                </div>
                <div className="logo-text desktop">
                    <img src={logo_text} alt="..." style={{paddingLeft:'15px'}} />
                </div>
                <li className={"nav-item toggle desktop ml-auto " + (page === 'cantina' && 'active') }>
                  <Link className="nav-link" to="/cantina">Cantina</Link>
                </li>
                <li className={"nav-item toggle desktop " + (page === 'tacos' && 'active') }>
                  <Link className="nav-link" to="/tacos">Tacos Y Tragos</Link>
                </li>
                <li className="nav-item ml-lg-auto nav-book" >
                    <HashLink className="nav-link" to="#form" smooth>Book a&nbsp;table</HashLink>
                </li>
                <li className="nav-item nav-lang">
                  <Link className="nav-link" to="#lang" onClick={this.langToggle}>{ lang }</Link>
                </li>
            </Nav>
            <div className={'mobile subnav ' + (this.state.mobNav ? 'active' : '')}>
                <Link className={"nav-link " + (page === 'cantina' ? 'active' : '')} to="/cantina">Cantina</Link>
                <Link className={"nav-link " + (page === 'tacos' ? 'active' : '') }to="/tacos">Tacos Y Tragos</Link>
            </div>
            { this.state.mobNav && <div className="headerFade"></div> }
        </Row>
    </ReactCSSTransitionGroup>
    </header>
    }
}
export default Header;
