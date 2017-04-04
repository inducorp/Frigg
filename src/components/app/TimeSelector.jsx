require('./TimeSelector.scss');
import React, {Component} from 'react';

export default class AppTimeSelector extends Component {
    constructor(props) {
        super(props);

        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);
    }

    handleMinutesChange(event) {
        this.props.changeHandler(this.props.time.clone().minutes(event.target.value));
    }

    handleSecondsChange(event) {
        this.props.changeHandler(this.props.time.clone().seconds(event.target.value));
    }

    renderSelect(from, to, value, changeHandler) {
        let options = [];
        for (let i = from; i <= to; i++) {
            options.push(<option key={i} value={i}>{i.toString().length == 1 ? '0' + i : i}</option>)
        }
        return <select value={value} onChange={changeHandler}>{options}</select>;
    }

    render() {
        const {time} = this.props;

        return (
            <div className="time-selector">
                {this.renderSelect(0, 59, time.minutes(), this.handleMinutesChange)}
                :
                {this.renderSelect(0, 59, time.seconds(), this.handleSecondsChange)}
            </div>
        )
    }
}