import React, {Component} from 'react';

require('./App.scss');

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout-app">
                APP
            </div>
        )
    }
}