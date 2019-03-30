import React, { Component } from 'react';
// import { connect } from 'react-redux';

import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import arrow from '../../assets/img/arrow-next.png';

class Item extends Component {
    state = {
    };

    render() {

        return <>
        <Col className="item">
            <Link to="/tacos">
                <div class="title"><p>Tacos y Tragos</p></div>
                <div class="subtitle">
                    <p>It’s tacos and tragos. This mezcal and tequila at the best price in the city</p>
                    <img src={arrow}  />
                </div>
            </Link>
        </Col>
        </>
    }
}


export default Item;
