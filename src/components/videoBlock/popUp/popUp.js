import React, { Component } from 'react';
import { Modal, Col } from 'react-bootstrap';
import  './popUp.css';

class PopUp extends Component {
    state = {
        show: true
    };

    handleClose() {
      this.setState({ show: false });
    }

    render() {
        return <Modal
                show={this.state.show}
                onHide={this.handleClose}
                dialogClassName={'my-modal'}
            >
            <Modal.Header closeButton />
            <Modal.Body>
                <Col className="img" lg={7} md={12}>
                    <img src="" alt="" />
                </Col>
                <Col className="text" lg={5} md={12}>
                <h1>{ name }</h1>
                <p>{ text }</p>
                </Col>
            </Modal.Body>
        </Modal>
    }
}

export default PopUp;
