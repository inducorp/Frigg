import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import AppLayout from 'layouts/App';
import HomePage from 'pages/Home';
import AppPage from 'pages/App';

export const routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppLayout}>
            <IndexRoute component={HomePage}/>
            <Route path="app" component={AppPage}/>
        </Route>
    </Router>
);