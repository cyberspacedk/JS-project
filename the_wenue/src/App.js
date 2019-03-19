import React, { Component } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/featured/index";
import Venueinfo from "./components/Venueinfo/Venueinfo";
import Highlights from "./components/Highlights/Highlights";
import Pricing from "./components/Pricing/Pricing";
import Location from "./components/Location/Location";
import Footer from "./components/Header_Footer/Footer";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="Featured">  
          <Featured />
        </Element>

        <Element name="Venueinfo">   
          <Venueinfo />
        </Element>

        <Element name="Highlights"> 
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
