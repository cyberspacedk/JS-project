import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import './body-mass-index.css';

const BodyMassIndex = ({goal, height, currentWeight, bmi,left}) => {

  return (
    <div className="body-mass-index">

    <div className="compare-weight"> 
        <div className="current-weight">
            <p className="weight-label ">Current weight</p>
            <div className="count-weight weight-now">{currentWeight}</div>
            <p className="describe-box">Date : 00/00/00</p>
        </div>

        <div className="wanted-weight">
            <p className="weight-label">Desired weight</p>
            <div className="count-weight desired-weight">{goal}</div>
            <p className="describe-box accent">{left} kg left</p>  
        </div> 
    </div>

    <div className="speedometer">

			<h2 className="speedometer-title">BMI (Body Mass Index)</h2>
    {/* 82cee8 , c8d23b , d12c26 */}
    	<ReactSpeedometer segments={3} 
											minValue={16} 
											maxValue={40} 
											value={bmi}
											height={200}
											needleHeightRatio={0.7}
											needleColor={'black'}  
											ringWidth={40}
											width={350} 
    />
     <p className="speedometer-describe">
		 	<span>{height} cm</span> <span>{currentWeight} kg</span>
		 </p>
    </div>

    </div>
  )
}

export default BodyMassIndex
