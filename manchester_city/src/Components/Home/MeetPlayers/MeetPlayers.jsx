import React, { Component } from 'react';
import stripes from '../../../Resources/images/stripes.png';
import {Tag} from '../../UI/misc';
import Reveal from 'react-reveal/Reveal';
import Homecards from './cards';

export default class MeetPlayers extends Component {


state ={
  show:false,
}

  render() {
  
      return (
      <Reveal fraction={0.7} 
              onReveal={()=>{
            this.setState({
              show:true
            })
      }}>
      <div className="home_meetplayers" style={{
        background: `#fff url(${stripes})`
      }}>
        <div className="container">
          <div className="home_meetplayers_wrapper">
            
            <div className="home_card_wrapper">
              <Homecards show={this.state.show}/>
            </div>
            
            <div className="home_text_wrapper">

              <div>
                <Tag  bck="#0e1731" 
                      size="100px" 
                      color="#fff"
                      margin="0 0 20px 0"
                      add={{
                        display: 'inline-block', 
                      }}>
                  Meet
                </Tag>
              </div>
              <div>
                <Tag  bck="#0e1731" 
                      size="100px" 
                      color="#fff"
                      margin="0 0 20px 0"
                      add={{
                        display: 'inline-block', 
                      }}>
                  the
                </Tag>
              </div>
              <div>
                <Tag  bck="#0e1731" 
                      size="100px" 
                      color="#fff"
                      margin="0 0 20px 0"
                      add={{
                        display: 'inline-block', 
                      }}>
                  Players
                </Tag>
              </div>
                <Tag  bck="#fff" 
                      size="27px"
                      color="#0e1731" 
                      margin="0 0 27px 0"
                      border='1px solid #0e1731' 
                      link={true} 
                      linkto="/the_team"
                      >
                  Meet them here
                </Tag>
            </div>

          </div>
        </div>
      </div>
   </Reveal>
    )
  }
}
