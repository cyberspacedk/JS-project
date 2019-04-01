import React from 'react';
import {Tag} from '../../UI/misc';
import Blocks from './Blocks';


const Matches = () => {
  return (
    <div className="home_matches_wrapper">
        <div className="container">
          <Tag bck="#0e1731"
               size="50px" 
               color="#ffffff">
               Matches
          </Tag>

          <Blocks />

          <Tag bck="#fff"
               size="22px" 
               color="#0e1731"
               linkto="/the_team">
               Matches
          </Tag>
        </div>
    </div>
  )
}

export default Matches