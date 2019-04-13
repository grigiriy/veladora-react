import React, { Component } from 'react';
import {Row, Carousel} from 'react-bootstrap';
import  './slider.css';

class Slider extends Component {

    state = {
        firstScreen: this.props
    };

    render() {

        const slide = this.props.slider;

        return <Row className="">
            <Carousel
                nextIcon={<span></span>}
                prevIcon={<span></span>}
                id="carousel_1"
                className="slide col"
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
