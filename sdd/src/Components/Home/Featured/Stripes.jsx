import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease/';
import Animate from 'react-move/Animate/'

export default class Stripes extends Component {


  state = {
    stripes: [
      {
        background:'#98c5e9',
        left:120,
        rotate:25,
        top:-260,
        delay:0,
      },
      {
        background:'#ffffff',
        left:360,
        rotate:25,
        top:-397,
        delay:300,
      }, 
      {
        background:'#98c5e9',
        left:600,
        rotate:25,
        top:-397,
        delay:500,
      }, 
    ]
  }

  showStripes = () =>  {

    return this.state.stripes.map((stripe,i) => (
      <Animate  key={i} 
                show={true} 
                start={{ 
                  background:'#fff', 
                  opacity: 0,
                  left:0,
                  rotate:0,
                  top:0,
                }}
                enter={{ 
                  background:[stripe.background],
                  opacity: [1], 
                  left:[stripe.left],
                  timing:{delay:stripe.delay,duration:200, ease: easePolyOut},
                  rotate:[stripe.rotate],
                  top:[stripe.top],
                }}> 
 
        {({opacity,left,rotate,top,background}) =>
        (<div className="stripe" 
              style={{ 
              opacity, 
              background,
              transform:`rotate(${rotate}deg) translate(${left}px, ${top}px)`,
              }}></div>)  }
        
      </Animate>
    ))
  }

  render() {
    return (
      <div className="featured_stripes">
        {this.showStripes()}
      </div>
    )
  }
}
