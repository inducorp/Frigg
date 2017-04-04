require('./App.scss');
import React, {Component} from 'react';
import moment from 'moment';

import AppLayout from 'layouts/App';
import AppButton from 'components/app/Button';
import TimeSelector from 'components/app/TimeSelector';

export default class AppPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: null,
      started: false,
      startTime: moment().hour(0).minutes(10).seconds(0),
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleTimeChange(time) {
    this.setState({startTime: time});
  }

  handleStateChange(data) {
    this.setState(data);
  }

  render() {
    const {paused, started, startTime} = this.state;

    return (
        <AppLayout>
          <div className="pages-app">
            <header>
              <TimeSelector time={startTime}
                            changeHandler={this.handleTimeChange}/>
            </header>

            <main>
              <AppButton paused={paused}
                         started={started}
                         changeHandler={this.handleStateChange}/>
            </main>

            <footer>
              <div>times</div>
            </footer>
          </div>
        </AppLayout>
    );
  }
};