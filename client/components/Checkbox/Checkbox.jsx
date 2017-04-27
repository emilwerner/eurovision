import React from 'react';

export default class Checkbox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.isChecked} onChange={this.props.cbChanged} />
                <label htmlFor="">{this.props.text}</label>
            </div>
        );
    }
}
