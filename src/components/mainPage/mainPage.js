import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Footer from '../footer';

import Item from './item';

import  './mainPage.css';

import logo from '../../assets/img/logo.png';
import back from '../../assets/img/main_back.png';
// import tacos from '../../assets/img/tacos_main.png';
// import cantina from '../../assets/img/tacos_main.png';

class MainPage extends Component {
    state = {
        back: 'back',
        loaded: false,
    };


    render() {
        return   <>
        <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={true}
            transitionAppearTimeout={3000}
            transitionEnter={false}
            transitionLeave={false}
        >
            <Container fluid="true" className="main-screen" style={{backgroundImage: 'url(' + back + ')' }} />
            <Container fluid="true" >
                <Row className="inner-screen">
                    <Col className="index-block d-flex pt-5" >
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
                        <Footer page={'index'}/>
                    </Col>
                </Row>
            </Container>
            <span className="bordAbs"/>
        </ReactCSSTransitionGroup>
    </>
    }
}

export default MainPage;
