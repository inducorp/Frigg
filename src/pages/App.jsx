require('./App.scss');
import React, {Component} from 'react';
import moment from 'moment';

import AppLayout from 'layouts/App';
import AppButton from 'components/app/Button';
import TimeSelector from 'components/app/TimeSelector';
import Countdown from 'components/app/Countdown';

export default class AppPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: null,
      started: false,
      startTime: moment().hour(0).minutes(10).seconds(0),

      enabled: false,
      time: moment().hour(0).minutes(0).seconds(10),
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleTimeChange(time) {
    this.setState({startTime: time});
  }

  handleStateChange(data) {
    if (data.started) {
      this.setState(Object.assign(data, {enabled: true}));
    } else if (data.paused) {
      this.setState(Object.assign(data, {enabled: false}));
    } else {
      this.setState(Object.assign(data, {enabled: true}));
    }
  }

  renderTime() {
    const {time, started, startTime} = this.state;

    if (started) {
      return <div>{time.format('HH:ss')}</div>;
    } else {
      return <TimeSelector time={startTime}
                           changeHandler={this.handleTimeChange}/>;
    }
  }

  handleTimeUpdate() {
    const time = this.state.time.clone();

    if (time.minutes() == 0 && time.seconds() == 0) {
      // finished
      this.setState({enabled: false});
    } else {
      this.setState({time: time.subtract(1, 'second')});
    }
  }

  render() {
    const {time, enabled, paused, started} = this.state;

    return (
        <AppLayout>
          <div className="pages-app">
            <header>
              <Countdown enabled={enabled} time={time}
                         callback={this.handleTimeUpdate.bind(this)}/>
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