import React, {Component} from 'react';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.timer = null;

    this.callback = this.callback.bind(this);
  }

  componentDidMount() {
    if (this.props.enabled) {
      this.start();
    }
  }

  componentDidUpdate({enabled}) {
    if (this.props.enabled !== enabled) {
      if (this.props.enabled) {
        this.start();
      } else {
        this.stop();
      }
    }
  }

  componentWillUnmount() {
    this.start();
  }

  callback() {
    this.props.callback();
    this.start();
  }

  start() {
    this.timer = setTimeout(this.callback, 1000);
  }

  stop() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  render() {
    const {time} = this.props;

    return (
        <div className="countdown">
          {time.format('mm:ss')}
        </div>
    );
  }
};