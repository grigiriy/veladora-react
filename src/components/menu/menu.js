import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

import  './menu.css';

class Menu extends Component {
    state = {
        menu: 'set',
    };

    render() {
        return <>
        <Col className="menu-text">
            <div className="wrapper d-flex text-block">
                <h2 className="text-center menuTitle">Set menu</h2>
                <Row className="mx-auto w-100 menuSubtitle" style={{justifyContent: 'center'}}>
                    <p className="menu-toggle active" data-target="#set">set menu</p>
                    <p className="menu-toggle" data-target="#weekend">weekend menu</p>
                </Row>
                <Row>
                    <Col md={10} className="mx-auto px-sm-0">
                        <div id="weekend" className="menu-list collapse show">
                            <div className="menu-item d-flex">
                                <span className="my-auto">Kimchi cucumber with sesame</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Shiso pickled pear with dried seaweed</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Herb salad with marinated tofu, seasonal herbs, crispy kale and dried figs</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">mussels on leek with yuzu beurre blanc</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">grilled edamame with bulldog sauce</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">lamb brioche with ginger and shiitake</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">yakitori selection – mushroom and chicken</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">aubergine with miso and hazelnuts</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Kimchi cucumber with sesame</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Shiso pickled pear with dried seaweed</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Herb salad with marinated tofu, seasonal herbs, crispy kale and dried figs</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">mussels on leek with yuzu beurre blanc</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">grilled edamame with bulldog sauce</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">lamb brioche with ginger and shiitake</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">yakitori selection – mushroom and chicken</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">aubergine with miso and hazelnuts</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                        </div>
                        <div  className="menu-list collapse" id="set">
                            <div className="menu-item d-flex">
                                <span className="my-auto">Shiso pickled pear with dried seaweed</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">Kimchi cucumber with sesame</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">yakitori selection – mushroom and chicken</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">mussels on leek with yuzu beurre blanc</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                            <div className="menu-item d-flex">
                                <span className="my-auto">grilled edamame with bulldog sauce</span>
                                <span className="my-auto _vg">3.50 vg</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    </>
    }
}

export default Menu;
