import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from '../header';
import Footer from '../footer';
import TextBlock from '../textBlock';
import Slider from '../slider';
import Menu from '../menu';
import VideoBlock from '../videoBlock';
import Book from '../book';
import Map from '../map';

import Content from  './content.js';

class Cantina extends Component {
    state = {
        back: 'back',
        page: 'cantina',
    };

    render() {
        const first_block = Content.first_block;
        const slider_1 = Content.slider_1;
        const slider_2 = Content.slider_2;
        const video = Content.video;

        return <>
        <Header page={ this.state.page }/>
            <Row className="screen pt-5">
                <Col>
                    <Slider slider={ slider_1 } firstScreen={true}/>
                </Col>
                <Col>
                    <TextBlock content={ first_block } firstScreen={true}/>
                </Col>
            </Row>
            <Book />
            <Row className="screen" id="menu">
                <Col className="menu-text">
                    <Menu />
                </Col>
                <Col className="menu-pics">
                    <Slider slider={ slider_2 } />
                </Col>
            </Row>
            <VideoBlock video={ video }/>
            <Map />
            <Footer />
        </>
    }
}
export default Cantina
