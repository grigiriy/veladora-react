import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Row, Carousel} from 'react-bootstrap';

import  './slider.css';

import img from '../../assets/img/tacos_first_block.png';

class Slider extends Component {

    state = {
    };

    render() {

        const slide = this.props.slider;

        console.log(slide);

        return <Row>
                <Carousel
                    nextIcon={<span></span>}
                    prevIcon={<span></span>}
                    id="carousel_1"
                    className=" slide"
                    data-ride="carousel"
                >
                    <Carousel.Item>
                        <div className="d-block w-100" style={{backgroundImage: 'url(' + slide[0] + ')' }}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block w-100" style={{backgroundImage: 'url(' + slide[1] + ')' }}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="d-block w-100" style={{backgroundImage: 'url(' + slide[2] + ')' }}></div>
                    </Carousel.Item>
                </Carousel>
            </Row>
    }
}

export default Slider;
