import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../components/home/Home"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
