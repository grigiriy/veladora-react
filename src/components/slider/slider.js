import React, { Component } from 'react';
import {Row, Carousel} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import  './slider.css';

class Slider extends Component {

    state = {
        firstScreen: this.props
    };

    render() {

        const slide = this.props.slider;

        return <Row className="sticky">
            <ReactCSSTransitionGroup
                transitionName="slider"
                transitionAppear={this.state.firstScreen ? true : false }
                transitionAppearTimeout={100}
                transitionEnter={false}
                transitionLeave={false}
            >
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
            </ReactCSSTransitionGroup>
        </Row>
    }
}

export default Slider;
