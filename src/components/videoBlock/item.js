import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PopUp from './popUp';
import { Modal, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import cross from '../../assets/img/cross.svg';

class Item extends Component {
    state = {
        video: 0,
        show: false,
        hover: false,
    };

    showPopup() {
        setTimeout( function(){
            document.querySelector('body').classList.add('noscroll');
        }, 500)
        this.setState({ show: true });
    }
    handleClose = () =>  {
        document.querySelector('body').classList.remove('noscroll');
      this.setState({ show: false });
    }

    render() {
        const { date } = this.props.video;
        const { name } = this.props.video;
        const { preview } = this.props.video;
        const { hover } = this.props.video;
        const { id } = this.props.video;
        const { text } = this.props.video;

        return <>
        <div className="card video-card" id={ id } onClick={() => this.showPopup()}>
            <div className="video-card--preview modal-init" data-toggle="modal" data-target="#myModal" data-video="4">
                <img src={ preview } className="offHover" alt="" />
                <img src={ hover } alt="" className="onHover" />
            </div>
            <div className="video-card--excerpt">
                <p className="video-dates">{ date }</p>
                <p className="video-title">{ name }</p>
            </div>
        </div>

        <Modal
                show={this.state.show}
                onHide={this.handleClose}
                dialogClassName={'my-modal'}
            >
                <HashLink onClick={() => this.handleClose()} to="#video" className="cross">
                    <img alt="" src={ cross } />
                </HashLink>
            <Modal.Body>
                <Row>
                    <Col className="img" lg={7} md={12}>
                        <img src={ preview } alt="" />
                    </Col>
                    <Col className="text" lg={5} md={12}>
                        <h1>{ name }</h1>
                        <p>{ text }</p>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>

        </>
    }
}


export default Item;
