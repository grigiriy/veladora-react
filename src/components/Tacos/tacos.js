import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import Header from '../header';
import TextBlock from '../textBlock';
import Slider from '../slider';
import Menu from '../menu';
import Map from '../map';

import Content from  './content.js';


class Tacos extends Component {
    state = {
        back: 'back',
        page:'tacos',
    };

    render() {
        const first_block = Content.first_block;
        const slider_1 = Content.slider_1;
        const slider_2 = Content.slider_2;

        return <>
        <Header page={this.state.page}/>
            <Row className="screen pt-5">
                <Col>
                    <Slider slider={slider_1}/>
                </Col>
                <Col>
                    <TextBlock content={first_block}/>
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
            <Map />
        </>
    }
}
export default Tacos
