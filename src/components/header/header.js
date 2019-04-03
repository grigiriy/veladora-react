import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav,Row} from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { createStore, bindActionCreators } from 'redux';

// import {changeLang, changePage, changeView} from '../../store/actions';
// import rootReducer from '../../store/reducers';

import logo from '../../assets/img/logo_vela.svg';
import logo_text from '../../assets/img/logo_font.svg';

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
    // changePage = () => {
    //     this.state.page === 'cantina' ? this.setState({page: 'tacos'}) : this.setState({page: 'cantina'});
    //     alert(this.state.page);
    // }

// mobileCheck() {
//     let cw = window.innerWidth;
//     cw < 769 ? this.setState({mobile: 'true'}) : this.setState({mobile: 'false'}) ;
// }
//
// componentDidMount() {
//     this.mobileCheck();
// }


    render() {

    const { lang } = this.state;
    const page = this.state.page;


        return <header >
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
    </header>
    }
}


// const mapStateToProps = (state) => {
//     console.log(state);
// 	return{
//         page: state.page,
//         lang: state.lang,
//         mobile: state.mobile,
// 	}
// }
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
//         changePage: bindActionCreators(changePage, dispatch),
//         changeLang: bindActionCreators(changeLang, dispatch),
//         changeView: bindActionCreators(changeView, dispatch),
// 	}
//   }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
