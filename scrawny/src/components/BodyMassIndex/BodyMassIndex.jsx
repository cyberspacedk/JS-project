import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import './body-mass-index.css';

const BodyMassIndex = ({goal, height, lastMeasure}) => {  

  const BMI = lastMeasure ? (lastMeasure.weight / (Math.pow( (height/100), 2))).toFixed(2)*1 : null; 
 
  return (
    <div className="body-mass-index">

    <div className="compare-weight"> 
        <div className="current-weight">
            <p className="weight-label ">Current weight</p>
            <div className="count-weight weight-now">{lastMeasure && lastMeasure.weight}</div>
            <p className="describe-box">{lastMeasure && lastMeasure.date}</p>
        </div>

        <div className="wanted-weight">
            <p className="weight-label">Desired weight</p>
            <div className="count-weight desired-weight">{goal}</div>
            <p className="describe-box accent">{lastMeasure && lastMeasure.weight-goal} kg left</p>  
        </div> 
    </div>

    <div className="speedometer"> 
			<h2 className="speedometer-title">BMI (Body Mass Index)</h2>  
    	<ReactSpeedometer segments={3} 
											minValue={16} 
											maxValue={40} 
											value={BMI}
											height={200}
											needleHeightRatio={0.7}
											needleColor={'black'}  
											ringWidth={40}
											width={350} />

     <p className="speedometer-describe"> <span>{height} cm</span> <span>{lastMeasure && lastMeasure.weight} kg</span> </p>
    </div>

    </div>
  )
}

export default BodyMassIndex
