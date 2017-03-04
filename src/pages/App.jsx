import React, {Component} from 'react';

import TimeSelector from 'components/TimeSelector';
import PauseButton from 'components/PauseButton';

require('./App.scss');

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pages-app">
                <header>
                    <div>
                        <TimeSelector/>
                    </div>
                </header>

                <main>
                    <PauseButton/>
                </main>

                <footer>
                    Time 1 <br/>
                    Time 2 <br/>
                    Time 3 <br/>
                    Time 4 <br/>
                    Time 5
                </footer>
            </div>
        )
    }
}