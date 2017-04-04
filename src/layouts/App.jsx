import React, {Component} from 'react';

require('./App.scss');

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="layout-app">
          {this.props.children}
        </div>
    );
  }
};