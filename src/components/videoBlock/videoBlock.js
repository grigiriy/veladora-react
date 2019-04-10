import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Slider from 'react-slick';

import  './videoBlock.css';

import Item from './item';
import circle from '../../assets/img/circle-logo.svg';

class VideoBlock extends Component {
    state = {
        rotate: 0
    };

    componentDidMount() {
        let self = this;
        setInterval(function(){
            self.setState({rotate: self.state.rotate + 1})
        }, 50);
	}

    render() {

        const { video_1 } = this.props.video;
        const { video_2 }  = this.props.video;
        const { video_3 } = this.props.video;
        const { video_4 } = this.props.video;

        var settings = {
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
          arrows: false,
        };

        return <>
        <Row className="custom-screen video-back" style={{paddingTop:'30px'}} id="video">
            <Col md={5} className="text">
                <div className="wrapper d-flex text-block" style={{justifyContent:'flex-start'}}>
                    <p className="label _tour">tour</p>
                    <h2>
                        Tour season of mexican chefs
                    </h2>
                    <p>На кухню бара Veladora продолжают приезжать шеф-повара из Мексики и показывать москвичам традиционную кухню и новые ингредиенты.</p>
                </div>
                <div className="circle-logo desktop"><img src={circle} alt="" style={{ transform: "rotate(" + this.state.rotate + "deg)" }}/></div>
            </Col>
            <Col md={7} className="video">
                <div className="wrapper d-flex text-block">
                    <Row className="d-flex video-block desktop">
                        <div className="video-wrap">
                            <Item video={ video_1 }/>
                            <Item video={ video_2 }/>
                        </div>
                        <div className="video-wrap">
                            <Item video={ video_3 }/>
                            <Item video={ video_4 }/>
                        </div>
                    </Row>
                    <Slider
                        className="d-flex video-block mobile"
                        {...settings}
                    >
                        <Item video={ video_1 }/>
                        <Item video={ video_2 }/>
                        <Item video={ video_3 }/>
                        <Item video={ video_4 }/>
                    </Slider>
                </div>
            </Col>
        </Row>
    </>
    }
}

export default VideoBlock;
