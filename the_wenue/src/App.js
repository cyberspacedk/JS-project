import React, { Component } from "react";

import Header from "./components/Header_Footer/Header";
import Featured from "./components/featured/index";
import Venueinfo from "./components/Venueinfo/Venueinfo";
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <Venueinfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
