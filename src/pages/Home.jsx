import React, {Component} from 'react';

import AppLayout from 'layouts/App';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppLayout>
          <div className="pages-app">
            home
          </div>
        </AppLayout>
    );
  }
};