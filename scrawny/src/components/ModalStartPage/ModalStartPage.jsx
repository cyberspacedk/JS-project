import React from 'react';
import './modal-start-page.css';
import title from './title.png';

const ModalStartPage = ({getStart, close , val}) => {

  return (
    <div className="start-modal">
        <img src={title} className="title-img" alt="title"/>
        <h1 className="greetings">Hi, at first input your parameters </h1>

        <form className="start-form" onSubmit={close}>

        <div className="userName">
            <span>Your name</span>
            <input type="text" name="startName" onChange={getStart} value={val.startName}/>
        </div>

        <div className="userAge">
            <span>Your age</span>
            <input type="number" name="starAge" onChange={getStart} value={val.starAge}/>
        </div>

        <div className="weight">
            <span>Your weight ( kg )</span>
            <input type="number" name="startWeight" onChange={getStart} value={val.startWeight} required/>
        </div>

        <div className="height">
            <span>Your height ( cm )</span>
            <input type="number" name="startHeight" onChange={getStart} value={val.startHeight} required/>
        </div>

        <div className="goal">
            <span>Your goal ( kg )</span>
            <input type="number" name="startGoal" onChange={getStart} value={val.startGoal} required/>
        </div>
         
        <button className="finish"> Lets start ! </button>
        </form>
      
    </div>
  )
}

export default ModalStartPage
