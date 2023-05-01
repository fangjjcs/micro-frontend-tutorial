import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import MainNavigation from './components/Navigation/MainNavigation';

export default () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <MarketingApp />
          </Route>
          <Route path="/pricing" exact>
            <MarketingApp />
          </Route>
          <Redirect to="/"/>
        </Switch> 
      </main>
    </Router>
  );
};
