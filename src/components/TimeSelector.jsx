import React, {Component} from 'react';

require('./TimeSelector.scss');

export default class TimeSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: '10',
            seconds: '00',
        };

        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);
    }

    handleMinutesChange(event) {
        this.setState({minutes: event.target.value});
    }

    handleSecondsChange(event) {
        this.setState({seconds: event.target.value});
    }

    renderSelect(from, to, value, changeHandler) {
        let options = [];
        for (let i = from; i <= to; i++) {
            options.push(<option key={i}>{i.toString().length == 1 ? '0' + i : i}</option>)
        }
        return <select value={value} onChange={changeHandler}>{options}</select>;
    }

    render() {
        const {minutes, seconds} = this.state;
        return (
            <div className="time-selector">
                {this.renderSelect(0, 59, minutes, this.handleMinutesChange)}
                :
                {this.renderSelect(0, 59, seconds, this.handleSecondsChange)}
            </div>
        )
    }
}