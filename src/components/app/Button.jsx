require('./Button.scss');
import React, {Component} from 'react';

export default class AppButton extends Component {
  constructor(props) {
    super(props);

    this.handleButtonDown = this.handleButtonDown.bind(this);
    this.handleButtonUp = this.handleButtonUp.bind(this);
  }

  handleButtonDown() {
    if (this.props.started) {
      this.props.changeHandler({paused: true});
    }
  }

  handleButtonUp() {
    if (this.props.started) {
      this.props.changeHandler({paused: false});
    } else {
      this.props.changeHandler({started: true});
    }
  }

  renderText() {
    const {started, paused} = this.props;

    return !started ? 'start' : paused ? 'paused' : 'pause';
  }

  render() {
    if ('ontouchstart' in window) {
      return (
          <button className={'pause-button'}
                  onTouchStart={this.handleButtonDown}
                  onTouchEnd={this.handleButtonUp}>
            {this.renderText()}
          </button>
      );
    } else {
      return (
          <button className={'pause-button'}
                  onMouseDown={this.handleButtonDown}
                  onMouseUp={this.handleButtonUp}>
            {this.renderText()}
          </button>
      );
    }
  }
};