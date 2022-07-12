/*!
Create by bangntce130421
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Manager from "layouts/Manager";
import Auth from "layouts/Auth";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/manager" component={Manager} />
      <Route path="/auth" component={Auth} />
      <Redirect from="/" to="/manager/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
