import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../header';
import Footer from '../footer';

import Item from './item';

import  './mainPage.css';

import logo from '../../assets/img/logo.svg';
import back from '../../assets/img/main_back.png';
import tacos from '../../assets/img/tacos_main.png';
import cantina from '../../assets/img/cantina_main.png';

const cw = window.innerWidth;
class MainPage extends Component {
    state={
        back: 'back',
        mobile: cw < 1024 ? true : false
    };

    mouseEnter = (e) => {
        this.setState({back: e})
    }
    mouseLeave = (e) => {
        this.setState({back: 'back' })
    }

    componentDidMount() {
        document.querySelector('body').classList.add('noscroll');
    }
    componentWillUnmount() {
        document.querySelector('body').classList.remove('noscroll');
    }

    render() {
        return   <>
        <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={ true }
            transitionAppearTimeout={ 3000 }
            transitionEnter={ false }
            transitionLeave={ false }
        >
            <Container fluid="true" className="main-screen"  />
            {this.state.back === 'back' ? <img src={back} alt="" className="backImg"/> : this.state.back === 'cantina' ? <img src={cantina} alt="" className="backImg"/> : <img src={tacos} alt="" className="backImg"/> }
            {this.state.mobile && <Header page={ 'index' } />}
            <Container fluid="true" >
                <Row className="inner-screen" >
                <Col md={12} className="logo mx-auto py-5">
                    <img src={logo} alt="veladora" />
                </Col>
                    <Col className="index-block d-flex pt-5" >
                        <Row className="w-100 centred">
                            <Col md={ 6 } sm={ 12 }
                                onMouseEnter={ () => this.mouseEnter('tacos') }
                                onMouseLeave={ () => this.mouseLeave() }
                            >
                                <Item page={ 'tacos' } />
                            </Col>
                            <Col md={ 6 } sm={ 12 }
                                onMouseEnter={ () => this.mouseEnter('cantina') }
                                onMouseLeave={ () => this.mouseLeave() }
                            >
                                <Item page={ 'cantina' } />
                            </Col>
                        </Row>
                        <Footer page={ 'index' } />
                    </Col>
                </Row>
            </Container>
            <span className="bordAbs" />
        </ReactCSSTransitionGroup>
    </>
    }
}

export default MainPage;
