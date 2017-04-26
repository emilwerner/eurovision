import React from 'react';
import Card from './../Card/Card.jsx'

export default class Artist extends React.Component {
    constructor() {
        super();
        this.state = { isFocus: false };
        this.setFocus = () => this._setFocus();
        this.stopFocus = () => this._stopFocus();
    }

    render() {
        const imgUri = `/static/${this.props.artist.country}_artist.jpg`;
        return (
            <div onClick={this.setFocus}
                className={this.state.isFocus ? 'isFocus' : null}
                ref="topdog">
                <Card>
                    <img src={imgUri} alt="" />
                    <div className="shortPresentation">
                        <p className="country">
                            {this.props.artist.country}
                        </p>
                        <h1>
                            {this.props.artist.name}
                        </h1>
                    </div>
                    <div className="notes">
                        <h3>
                            Betyg
                        </h3>
                        <p>10/10</p>
                        <h3>
                            Anteckningar
                        </h3>
                        <p>10/10</p>
                    </div>
                </Card>
                <div className="exitBar">
                    <div onClick={this.stopFocus} className="pull-right">
                        Stäng
                    </div>
                </div>
            </div>);
    }

    _setFocus() {
        if (!this.state.isFocus) {
            this.setState({ isFocus: true });
        }
    }
    _stopFocus() {
        this.setState({ isFocus: false });
        this.refs.topdog.scrollIntoView();
    }
}
