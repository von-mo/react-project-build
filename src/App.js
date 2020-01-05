
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import Routes from "../src/pages/Routes"
import "./App.scss"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default hot(App);
