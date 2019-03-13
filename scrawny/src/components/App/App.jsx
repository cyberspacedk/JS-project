import React, { Component } from 'react'; 
import {Switch, Route} from 'react-router-dom';

import Header from '../Header/Header';
import ModalStartPage from '../ModalStartPage/ModalStartPage';
import AddNewData from '../AddNewData/AddNewData';
import Navigation from '../Navigation/Navigation';
import BodyMassIndex from '../BodyMassIndex/BodyMassIndex';


import './App.css';

const initialState = {
  startName: '',
  starAge: '',
  startWeight: '',
  startHeight: '',
  startGoal: '',
};


class App extends Component {
 
  state={
    startData: JSON.parse(localStorage.getItem('startData')) ? JSON.parse(localStorage.getItem('startData')) : initialState ,
    updateData: {weight:'',date:'',time:''},
    achievement:[],
    darkmode : false,
    startModal: true,
    addNewData: false, 
    
  }
  
  componentWillMount(){
    if(this.getFromLocalStorage('startData') !== null) this.setState({startModal:false}); 
  }
  componentDidMount(){  
    this.setState( { darkmode: this.getFromLocalStorage('mode'), achievement: this.getFromLocalStorage('hallOfFames') } ); 
  }
   
  changeThemeMode = async()=>{
    await this.setState({
      darkmode: !this.state.darkmode,
    }) 
    this.setTolocalStorage(this.state.darkmode, 'mode');
  }

  getStartParams = async({target})=> {
    await this.setState({
      startData: {...this.state.startData, [target.name]: target.value}, 
    });
    this.setTolocalStorage(this.state.startData, 'startData')
  }

  closeStartModal =()=>{
    this.setState({
      startModal:false,
    })
  }

  toggleAddNewData = async({target})=>{
    if(target.dataset.name === 'add') await this.setState({addNewData: true}); 
    if(target.dataset.name === 'close') await this.setState({addNewData: false}); 
  }

  getFromLocalStorage = (key)=> JSON.parse(localStorage.getItem(key)); 

  setTolocalStorage = (obj,key)=>{
    localStorage.setItem(key, JSON.stringify(obj));
  }

  wrightAchive = async({target})=>{
    await this.setState({
      updateData: {...this.state.updateData, [target.name]:target.value}
    })
  } 
  wrightToHallofFame = async(e)=>{
    e.preventDefault();

      await this.setState({
        achievement: [this.state.updateData].concat(this.state.achievement),
        addNewData: false,
        updateData: { weight: '', date: '', time:'', }
      })
      this.setTolocalStorage(this.state.achievement,'hallOfFames');
  }

    


  render() { 
    const {darkmode, startModal, startData, addNewData, updateData}=this.state;
    const {startWeight, startHeight, startGoal}=this.state.startData;
    const BMI = (startWeight / (Math.pow( (startHeight/100), 2))).toFixed(2)*1; 
    const leftTogoal = Math.abs(startWeight -startGoal);

  return (
    <div className="container">

    <Header changemode={this.changeThemeMode} mode={darkmode} add={this.toggleAddNewData}/>
    <Navigation />

    <Switch>
      <Route path='/bodymassindex' render={(props)=> (
      <BodyMassIndex goal={startGoal} 
                     height={startHeight} 
                     currentWeight={startWeight}
                     bmi={BMI}
                     left={leftTogoal}
                     {...props}/>) } />

    </Switch>



    {startModal && <ModalStartPage getStart={this.getStartParams} close={this.closeStartModal} val={startData}/>}
    <AddNewData close={this.toggleAddNewData} 
                isShow={addNewData}
                getNewData={this.wrightAchive}
                wrightNewData={this.wrightToHallofFame}
                val={updateData}/>
    </div>
  );
  }
}

export default App;
