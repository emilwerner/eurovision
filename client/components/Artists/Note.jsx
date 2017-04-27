import React from 'react';
import Checkbox from "./../Checkbox/Checkbox.jsx";

export default class Note extends React.Component {
    constructor() {
        super();
        this.handleChange = () => this._handleChange();
    }

    render() {
        (this.props.noteItem.isChecked);
        return (
            <div>
                <Checkbox
                    isChecked={this.props.noteItem.isChecked}
                    text={this.props.noteItem.text}
                    cbChanged={this.handleChange} />
            </div>
        );
    }

    _handleChange() {
        this.props.noteItem.isChecked = !this.props.noteItem.isChecked;
        this.props.updateNote(this.props.noteItem);
    }
}
