import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import home from '../containers/Home/index';
import details from '../containers/Details/index';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component={home} />
          <Route exact path = "/details" component={details} />
        </Switch>
      </BrowserRouter>
  );
}

export default Router;