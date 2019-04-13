import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Header from '../header';
import Footer from '../footer';
import TextBlock from '../textBlock';
import Slider from '../slider';
import Menu from '../menu';
import MapBlock from '../map';

import Content from  './content.js';


class Tacos extends Component {
    state = {
        back: 'back',
        page:'tacos',
        mobile: this.props.mobile
    };

    render() {
        const first_block = Content.first_block;
        const slider_1 = Content.slider_1;
        const slider_2 = Content.slider_2;

        return <>
        <Header page={this.state.page}/>
            <Row className="screen pt-5">
                <Col>
                    <Slider slider={slider_1} firstScreen={true} />
                </Col>
                <Col>
                    <TextBlock content={first_block} firstScreen={true} page={this.state.page}/>
                </Col>
            </Row>
            <Row className="screen" id="menu">
                <Col className="menu-text">
                    <Menu />
                </Col>
                <Col className="menu-pics">
                    <Slider slider={slider_2 }/>
                </Col>
            </Row>
            <MapBlock />
            <Footer />
        </>
    }
}
export default Tacos
