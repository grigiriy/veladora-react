import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Item from  './item.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Content from  './content.js';

import  './menu.css';

class Menu extends Component {
    state = {
        menu: 'weekend',
        items: Content.weekend
    };

toggleMenu = (a) => {
    this.state.menu === 'set' ? this.setState({ menu: 'weekend' }) : this.setState({ menu: 'set' });
    this.state.menu === 'set' ? this.setState({ items: Content.weekend }) : this.setState({ items: Content.set });
}

    render() {
        // const  set = Content.set;
        // const weekend = Content.weekend;

        return <>
        <Col className="menu-text">
            <div className="wrapper d-flex text-block">
                    <h2 className="text-center menuTitle">Set menu</h2>
                    <Row className={"mx-auto w-100 menuSubtitle " + (this.state.menu === 'set' ? 'set' : 'weekend')} style={{justifyContent: 'center'}}>
                        <p className="menu-toggle set" onClick={ () => this.toggleMenu() }>set menu</p>
                        <p className="menu-toggle weekend" onClick={ () => this.toggleMenu() }>weekend menu</p>
                    </Row>
                    <Row>
                        <Col md={10} className="mx-auto px-sm-0">
                            <div className="menu-list">
                                    <ReactCSSTransitionGroup
                                        transitionName="example"
                                        transitionEnter = { true }
                                        transitionEnterTimeout = { 400 }
                                        transitionLeaveTimeout = { 400 }
                                        transitionAppearTimeout = { 400 }
                                    >
                                { (this.state.items).map((item, index) =>
                                    <Item menu = { this.state.menu } item = { item } key = { this.state.menu + index } />
                                ) }
                                  </ReactCSSTransitionGroup>
                            </div>
                        </Col>
                    </Row>
            </div>
        </Col>
    </>
    }
}

export default Menu;
