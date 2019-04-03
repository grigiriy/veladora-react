import React, { Component } from 'react';
// import { connect } from 'react-redux';

import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import arrow from '../../assets/img/arrow-next.png';

let content = {
    header:  'Cantina',
    back:  '../../assets/img/cantina_main.png',
    linkTo: '/cantona',
}

const Content = ({ page, onClick, onMouseEnter, onMouseLeave }) => {

    if (page === 'cantina') {
        content = {
            header:  'Cantina',
            back:  '../../assets/img/cantina_main.png',
            linkTo: '/cantina',
        }
    } else if (page === 'tacos') {
        content = {
            header:  'Tacos y Tragos',
            back:  '../../assets/img/tacos_main.png',
            linkTo: '/tacos',
        }
    };

    return (
        <Link to={ content.linkTo } onMouseEnter={ onMouseEnter } onClick={ onClick } onMouseLeave={ onMouseEnter } data-back={ content.back }>
            <div className="title"><p>{ content.header }</p></div>
            <div className="subtitle">
                <p>It’s tacos and tragos. This mezcal and tequila at the best price in the city</p>
                <img src={arrow}  alt=""/>
            </div>
        </Link>
    )
};

Content.defaultProps = {
    page: 'cantina',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onClick: () => {},
}

class Item extends Component {
    state = {
    };

    mouseEnter = (e) => {
        console.log(e.back);
    }
    mouseLeave = (e) => {
        console.log('huy');
    }

    render() {

        return <>
        <Col className="item">
         <Content
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            page={this.props.page}
        />
        </Col>
        </>
    }
}


export default Item;
