import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { name } = this.props.item;
        const { size } = this.props.item;
        return <div className="menu-item d-flex">
                <span className="my-auto">
                    { name }
                </span>
                <span className="my-auto _vg">
                    { size }
                </span>
            </div>
    }
}
export default Item;
