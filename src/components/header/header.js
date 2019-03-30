import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

import logo from '../../assets/img/logo_vela.svg';
import logo_text from '../../assets/img/logo_font.svg';

import  './header.css';

class Header extends Component {
    state = {
        page: 'index',
        lang: 'En',
    };

    render() {
        return <Nav className="navbar w-100 d-flex">
            <div className="logo-pic">
                <img src={logo} alt="..." />
            </div>
            <div className="logo-text">
                <img src={logo_text} alt="..." style={{paddingLeft:'15px'}} />
            </div>
            <li className="nav-item nav-lang ml-auto">
              <Link className="nav-link" to="#mdo">RU</Link>
            </li>
        </Nav>
    }

}

export default Header;
