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
    if (a === this.state.menu){
        this.setState({ items: [] });
        let that = this;
        setTimeout(function(){
            that.state.menu === 'set' ? that.setState({ menu: 'weekend' }) : that.setState({ menu: 'set' });
            that.state.menu === 'set' ? that.setState({ items: Content.weekend }) : that.setState({ items: Content.set });
        }, 200);
    } else {
        return;
    }
}

    render() {
        // const  set = Content.set;
        // const weekend = Content.weekend;

        return <>
            <div className="wrapper d-flex text-block">
                    <h2 className="text-center menuTitle">Set menu</h2>
                    <Row className={"mx-auto w-100 menuSubtitle " + (this.state.menu === 'set' ? 'set' : 'weekend')} style={{justifyContent: 'center', position:'relative'}}>
                        <p className="menu-toggle set" onClick={ () => this.toggleMenu('set') }>set menu</p>
                        <p className="menu-toggle weekend" onClick={ () => this.toggleMenu('weekend') }>weekend menu</p>
                    </Row>
                    <Row>
                        <Col md={10} className="mx-auto px-sm-0">
                            <div className="menu-list">
                                    <ReactCSSTransitionGroup
                                        transitionName="menu"
                                        transitionAppear = { false }
                                        transitionEnter = { true }
                                        transitionLeave = { true }
                                        transitionEnterTimeout = { 200 }
                                        transitionLeaveTimeout = { 300 }
                                    >
                                { (this.state.items).map((item, index) =>
                                    <Item menu = { this.state.menu } item = { item } key = { this.state.menu + index } />
                                ) }
                                  </ReactCSSTransitionGroup>
                            </div>
                        </Col>
                    </Row>
            </div>
    </>
    }
}

export default Menu;
