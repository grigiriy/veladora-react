import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
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

        return <Container fluid={true}>
            <Header page={ this.state.page }/>
            <Row className="screen _fst">
                <Col>
                <ReactCSSTransitionGroup
                    transitionName = 'slider'
                    transitionAppear = {true}
                    transitionAppearTimeout={200}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <SliderBlock slider={ slider_1 } firstScreen={true}/>
                </ReactCSSTransitionGroup>
                </Col>
                <Col>
                    <TextBlock content={ first_block } firstScreen={ true } page={ this.state.page }/>
                </Col>
            </Row>
            <Book />
            <Row className="screen" id="menu">
                <Col className="menu-text mo-2">
                    <Menu />
                </Col>
                <Col className="menu-pics mo-1">
                    <SliderBlock slider={ slider_2 }/>
                </Col>
            </Row>
            <VideoBlock video={ video }/>
            <Row>
                <MapBlock />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    }
}
export default Cantina
