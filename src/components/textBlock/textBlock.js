import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import  './textBlock.css';

import img from '../../assets/img/read-more.svg';

class TextBlock extends Component {
    state = {
        expanded: false,
        firstScreen: this.props
    };

    toggleReadMore() {
        let expanded = !this.state.expanded;
        this.setState({expanded});
    }

    render() {
        const { label } = this.props.content;
        const  { title }  = this.props.content;
        const { text } = this.props.content;
        const { more } = this.props.content;

        const _opened = 'Read more';
        const _closed = 'Hide';
        const _rotated = 'rotated';
        const _shown = 'shown';
        // if (this.state.expanded)
        //     document.getElementById('add_text').classList.remove('d-none');

        return <div className="d-flex v-center">
            <div className="wrapper text-block h-480 tacos">
                <ReactCSSTransitionGroup
                    transitionName="text"
                    transitionAppear={this.state.firstScreen ? true : false }
                    transitionAppearTimeout={100}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <span id="t-block_1">
                        <p className="label _an">{ label }</p>
                        <h1 className="_an">{ title }</h1>
                        <p className="_an">{ text }</p>
                        <div className={ this.state.expanded && _shown } id="add_text">
                            <p >{ more }</p>
                        </div>
                        <Link className="_an read-more" to="#success" id="readMore_outline">
                            <img src={img} alt="..." className={ this.state.expanded && _rotated }/>
                            <span onClick={() => this.toggleReadMore()}>{ !this.state.expanded ? _opened : _closed }</span>
                        </Link>
                    </span>
                </ReactCSSTransitionGroup>
            </div>
        </div>
    }
}

export default TextBlock;
