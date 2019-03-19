import React, { Component } from "react";

export default class Pricing extends Component {

state = {
  prices: [100, 150, 250],
  positions: ['Balcony','Medium','Start'],
  desc: [
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, esse? Repellendus, libero!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi.'
  ],
  linkto: ['http://sales/b','http://sales/m','http://sales/s'], 
}

showBoxes =()=> (
  this.state.prices.map((price)=>(
    
  ))
)


  render() {
    return (
      <div className="bck_black"> 
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">boxes</div>
        </div>

      </div>
    );
  }
}
