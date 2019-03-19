import React, { Component } from "react";
import ButtonHighlights from "../UI/ButtonHighlights";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Start"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, esse? Repellendus, libero!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi."
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, idx) => (
      <Zoom delay={this.state.delay[idx]} key={idx}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>$ {box}</span>
              <span>{this.state.positions[idx]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[idx]}</div>
            <div className="pricing_buttons">
              <ButtonHighlights text="Purchase" link={this.state.linkto[idx]} />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
