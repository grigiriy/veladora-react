import React, { Component } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import DayPicker from 'react-daypicker';

import 'react-daypicker/lib/DayPicker.css';
import  './book.css';

import img from '../../assets/img/second_block.png';

class TextBlock extends Component {
    state = {
        sent: false,
        sticky: false,
        persons: 1,
        day: 'Today',
        calend: false,
    };

    handleSticky = event => {
        let startSticky = document.getElementById('book').offsetTop;
        let endSticky = document.getElementById('menu').offsetTop;
        (window.scrollY > startSticky && window.scrollY < endSticky) ? this.setState({sticky: true}) : this.setState({sticky: false});
    }

    addPerson() {
        if (this.state.persons < 11) {
            this.setState({ persons: this.state.persons + 1 });
        }
    }
    removePerson() {
        if (this.state.persons > 1) {
            this.setState({ persons: this.state.persons - 1 });
        }
    }
    // toggleCalend() {
    //     let toggledCalend = !this.state.calend;
    //     this.setState({ calend: true });
    //     if (!this.state.popupVisible) {
    //       document.addEventListener('click', this.handleOutsideClick, false);
    //     } else {
    //       document.removeEventListener('click', this.handleOutsideClick, false);
    //     }
    // }

    // Init
	componentDidMount() {
		window.addEventListener('scroll', this.handleSticky);
		this.handleSticky();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleSticky);
	}

    render() {
        const sticky = this.state.sticky ? 'b-sticky' : '';
        let persons = this.state.persons + ' persons';
        return <>
        <Row id="book" className={"screen book-screen " + sticky}>
            <Col sm={12} className="mobile mobile_book_pic w-100">
                <img src={img} alt="" style={{maxWidth:'100%'}} />
            </Col>
            <Col sml={12} className="mx-auto d-flex z-10">
                <form  style={{minHeight:'650px'}} id="form">
                    <span className="_form">
                        <h2 className="text-center">Book a table</h2>
                        <p className="text-center">Three days a week, from Thursday to Saturday, we serve set-dinner on pre-reservation.</p>
                        <div className="d-flex text-block">
                            <div className="inputs">
                                <input type="text" placeholder="name" className="w-100" />
                                <div className="line-inputs row">
                                    <div className="col-md-7 col-sm-12 schedule-inputs">
                                        <div className="d-flex schedule">
                                            <span className="schedule--date" onClick={ () => this.toggleCalend() }>
                                                <input className="calend_input" type="text" name="date" id="date" value={ this.state.day } />
                                                { this.state.calend && (<DayPicker onDayClick={(day) => this.setState({ day })} />) }
                                            </span>
                                            <Dropdown className="schedule--time">
                                                <Dropdown.Toggle id="schedule" type="button" data-toggle="dropdown">19:00</Dropdown.Toggle>
                                                <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                                                    <div className="dropdown-wrap">
                                                        <Dropdown.Item data-time="19:00">19:00</Dropdown.Item>
                                                        <Dropdown.Item data-time="20:00">20:00</Dropdown.Item>
                                                        <Dropdown.Item data-time="21:00">21:00</Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="persons-input col-md-5 col-sm-12">
                                        <span id="minus" onClick={ () => this.removePerson() }>-</span>
                                            <input type="text"  placeholder="persons" id="persons" value={ persons } disabled />
                                        <span id="plus" onClick={ () => this.addPerson() }>+</span>
                                    </div>
                                </div>
                                <input type="phone" placeholder="phone number" className="w-100" />
                            </div>
                            <button id="confirm" >book now</button>
                        </div>
                    </span>
                    <div className="_success" style={{display:'none', textAlign:'center'}}>
                        <svg id="successAnimation" className="animated" xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 70 70">
                          <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"/>
                          <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" strokeWidth="2" strokeLinecap="round" fill="transparent"/>
                          <polyline id="successAnimationCheck" stroke="#979797" strokeWidth="2" points="23 34 34 43 47 27" fill="transparent"/>
                        </svg>
                        <h2 className="text-center">Thank You</h2>
                        <p className="text-center">Your table is now booked. We will get in touch to re-confirm your reservation.</p>
                    </div>
                </form>
            </Col>
        </Row>
    </>
    }
}

export default TextBlock;
