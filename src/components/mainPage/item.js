import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import arrow from '../../assets/img/arrow-next.png';

let cantina = {
    header:  'Cantina',
    back:  '../../assets/img/cantina_main.png',
    linkTo: '/cantina',
}

let tacos = {
    header:  'Tacos y Tragos',
    back:  '../../assets/img/tacos_main.png',
    linkTo: '/tacos',
}

class Item extends Component {
    state = {
    };

    mouseEnter = (e) => {
        console.log(e.back);
    }
    mouseLeave = (e) => {
    }

    trans = (e) =>{
    }


    render() {
        const page = this.props.page;
        const content = page === 'tacos' ? tacos : page === 'cantina' ? cantina : 'error';
        return <>
        <Col className={"item " + this.props.page}>
        <Link
            // onClick={ this.trans }
            to={ content.linkTo }
            // onMouseEnter={ mouseEnter }
            // onMouseLeave={ mouseLeave }
            data-back={ content.back }
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
