import React, { Component } from 'react';
import {Row, Carousel} from 'react-bootstrap';
import  './slider.css';
// import Slider from 'react-slick';

class SliderBlock extends Component {

    state = {
        firstScreen: this.props.firstScreen,
        sticky: false,
        index: 0,
        prevIndex: '-1'
    };

    handleSelect = (selectedIndex) => {
        this.setState({
          prevIndex: this.state.index,
          index: selectedIndex,
        });
    }

    handleSticky = event => {
        let nextId = ( this.props.page === 'cantina' ) ? 'video' : 'map';
        if (!this.state.firstScreen){
            let startSticky = document.getElementById('menu').offsetTop;
            let endSticky = document.getElementById(nextId).offsetTop;
            (window.scrollY > startSticky && window.scrollY < endSticky) ? this.setState({sticky: true}) : this.setState({sticky: false});
        }
    };

    componentDidMount() {
        if (!this.state.firstScreen){
    		window.addEventListener('scroll', this.handleSticky);
    		this.handleSticky();
        }
	}
	componentWillUnmount() {
        if (!this.state.firstScreen){
    		window.removeEventListener('scroll', this.handleSticky);
    		this.handleSticky();
        }
	}

    render() {

        const sticky = this.state.sticky ? 'sticky' : '';
        const slide = this.props.slider;
        const counter = this.state.firstScreen ? '1' : '2';

        const { index } = this.state;

        return <Row className={sticky + ' index_' + index}>
            <Carousel
                nextIcon={<span></span>}
                prevIcon={<span></span>}
                id={"slider_" + counter}
                className="slide col"
                onSelect={this.handleSelect}
                wrap={false}
                interval={null}
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
            <ol class="carousel-indicators _secondary">
              <li className="active"><div /></li>
              <li><div /></li>
              <li><div /></li>
            </ol>
        </Row>
    }
}

export default SliderBlock;
