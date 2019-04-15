import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../header';
import Footer from '../footer';
import TextBlock from '../textBlock';
import SliderBlock from '../slider';
import Menu from '../menu';
import VideoBlock from '../videoBlock';
import Book from '../book';
import MapBlock from '../map';

import Content from  './content.js';

class Cantina extends Component {
    state = {
        back: 'back',
        page: 'cantina',
        mobile: this.props.mobile
    };

    render() {
        const first_block = Content.first_block;
        const slider_1 = Content.slider_1;
        const slider_2 = Content.slider_2;
        const video = Content.video;

        return <>
            <Header page={ this.state.page }/>
            <Row className="screen _fst">
                <Col md={12} lg={6}>
                <ReactCSSTransitionGroup
                    transitionName = 'slider'
                    transitionAppear = {true}
                    transitionAppearTimeout={100}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <SliderBlock slider={ slider_1 } firstScreen={true}/>
                </ReactCSSTransitionGroup>
                </Col>
                <Col md={12} lg={6}>
                    <TextBlock content={ first_block } firstScreen={ true } page={ this.state.page }/>
                </Col>
            </Row>
            <Book />
            <Row className="screen" id="menu">
                <Col className="menu-text" md={12} lg={6}>
                    <Menu />
                </Col>
                <Col className="menu-pics" md={12} lg={6}>
                    <SliderBlock slider={ slider_2 }/>
                </Col>
            </Row>
            <VideoBlock video={ video }/>
            <MapBlock />
            <Footer />
        </>
    }
}
export default Cantina
