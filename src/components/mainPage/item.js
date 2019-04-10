import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import arrow from '../../assets/img/arrow-next.svg';

let cantina = {
    header:  'Cantina',
    linkTo: '/cantina',
}

let tacos = {
    header:  'Tacos y Tragos',
    linkTo: '/tacos',
}

class Item extends Component {
    state = {
    };

    render() {
        const page = this.props.page;
        const content = page === 'tacos' ? tacos : page === 'cantina' ? cantina : 'error';
        return <>
        <Col className={"item d-flex " + this.props.page}>
        <Link
            to={ content.linkTo }
            data-back={ content.back }
            className="w-100 my-auto"
        >
            <div className="title"><p><span>{ content.header }</span></p></div>
            <div className="subtitle">
                <p>It’s tacos and tragos. This mezcal and tequila at the best price in the city</p>
                <img src={arrow}  alt=""/>
            </div>
        </Link>
        </Col>
        </>
    }
}


export default Item;
