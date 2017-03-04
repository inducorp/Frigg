import React, {Component} from 'react';

require('./PauseButton.scss');

export default class PauseButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="pause-button">
                START
            </button>
        )
    }
}