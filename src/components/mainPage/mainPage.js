import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Item from './item';
import Footer from '../footer';

import  './mainPage.css';

import logo from '../../assets/img/logo.png';
import back from '../../assets/img/main_back.png';
// import tacos from '../../assets/img/tacos_main.png';
// import cantina from '../../assets/img/tacos_main.png';

class MainPage extends Component {
    state = {
        back: 'back',
    };

    render() {
        return <>
        <Row className="main-screen">
            <Col className="index-block d-flex pt-5" style={{backgroundImage: 'url(' + back + ')' }}>
                <Row>
                    <Col md={12} className="logo mx-auto py-5">
                        <img src={logo} alt="veladora" />
                    </Col>
                    <Col>
                        <Item page={'tacos'}/>
                    </Col>
                    <Col>
                        <Item page={'cantina'}/>
                    </Col>
                </Row>
            <Footer />
            </Col>
        </Row>
        </>
    }
}
export default MainPage
