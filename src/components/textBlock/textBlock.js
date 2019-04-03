import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  './textBlock.css';

import img from '../../assets/img/read-more.svg';

class TextBlock extends Component {
    state = {
        expanded: false,
    };

    render() {

        const { label } = this.props.content;
        const  { title }  = this.props.content;
        const { text } = this.props.content;
        const { more } = this.props.content;

        return <div className="d-flex v-center">
            <div className="wrapper text-block h-480 tacos">
                <span id="t-block_1">
                    <p className="label">{ label }</p>
                    <h1>{ title }</h1>
                    <p>{ text }</p>
                    <div style={{display:'none'}} id="add_text">
                        <p>{ more }</p>
                    </div>
                    <Link to="#success" id="readMore_outline" className="read-more"><img src={img} alt="..." />
                        <span>Read more</span>
                        <span style={{display:'none'}}>Hide</span>
                    </Link>
                </span>
            </div>
        </div>
    }
}

export default TextBlock;
