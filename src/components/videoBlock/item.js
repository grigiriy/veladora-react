import React, { Component } from 'react';
// import { connect } from 'react-redux';



import img from '../../assets/img/4-video.png';
import img_hov from '../../assets/img/gif_1.gif';

class Item extends Component {
    state = {
        video1: '0',
        video2: '0',
        video3: '0',
        video4: '0',
        popup: 'false'
    };

    render() {

        const { date } = this.props.video;
        const { name } = this.props.video;
        const { preview } = this.props.video;
        const { hover } = this.props.video;
        // const { text } = this.props.video;

        return <>
        <div className="card video-card">
            <div className="video-card--preview modal-init" data-toggle="modal" data-target="#myModal" data-video="4">
                <img src={ preview } className="offHover" alt="" />
                <img src={ hover } alt="" className="onHover" />
            </div>
            <div className="video-card--excerpt">
                <p className="video-dates">{ date }</p>
                <p className="video-title">{ name }</p>
            </div>
        </div>
        </>
    }
}


export default Item;
