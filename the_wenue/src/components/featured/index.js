import React from 'react';
import Carousel from './Carousel';
import TimeUntill from './TimeUntill';

const Featured = () => {
  return (
    <div style={{position:'relative'}}>
    
    <Carousel/>
    <div className="artist_name">
        <div className="wrapper">
            Arianna Grande
        </div>
    </div>
    
    <TimeUntill/>

    </div>
  )
}

export default Featured
