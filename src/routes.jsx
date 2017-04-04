import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from 'pages/Home';
import AppPage from 'pages/App';
import NotFoundPage from 'pages/NotFound';

export const routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/app" component={AppPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
);