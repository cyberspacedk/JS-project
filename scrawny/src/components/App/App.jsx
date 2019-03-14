import React, { Component } from 'react'; 
import {Switch, Route} from 'react-router-dom';

import Header from '../Header/Header';
import ModalStartPage from '../ModalStartPage/ModalStartPage';
import AddNewData from '../AddNewData/AddNewData';
import Navigation from '../Navigation/Navigation';
import BodyMassIndex from '../BodyMassIndex/BodyMassIndex';
import History from '../History/History';
import Chart from '../Chart/Chart';


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
    updateData: {weight:'', date:''},
    achievement:[],
    darkmode : false,
    startModal: true,
    addNewData: false, 
    lastMeasure: {},
    
  }
  
  componentWillMount(){
    if(this.getFromLocalStorage('startData') !== null) this.setState({startModal:false}); 
  }
  componentDidMount(){  
    this.setState( { darkmode: this.getFromLocalStorage('mode'), 
                      achievement: this.getFromLocalStorage('hallOfFames'),
                      lastMeasure : this.getFromLocalStorage('lastMeasure')  } ); 
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

  wrightAchieve = async({target})=>{
    await this.setState({
      updateData: {...this.state.updateData, [target.name]:target.value}
    })
  } 

  wrightToHallofFame = async(e)=>{
    e.preventDefault();
    this.state.updateData.id = Date.now();

      await this.setState({
        achievement: this.state.achievement !== null ? [this.state.updateData, ...this.state.achievement]:[this.state.updateData],
        addNewData: false,
        lastMeasure: this.state.updateData,
        updateData: { weight: '', date: ''}         
      }) 
      this.setTolocalStorage(this.state.achievement,'hallOfFames');
      this.setTolocalStorage(this.state.lastMeasure,'lastMeasure');
  }

    


  render() { 
    const {darkmode, startModal, startData, addNewData, updateData, achievement, lastMeasure}=this.state;
    const {startWeight, startHeight, startGoal}=this.state.startData;
     
    
  return (
    <div className="container">

    <Header changemode={this.changeThemeMode} mode={darkmode} add={this.toggleAddNewData}/>
    <Navigation />

    <Switch>

      <Route path='/' exact render={(props)=> (
        <BodyMassIndex goal={startGoal} 
                      height={startHeight} 
                      currentWeight={startWeight} 
                      lastMeasure={lastMeasure} 
                      {...props}/>) }/>

      <Route path='/bodymassindex' render={(props)=> (
        <BodyMassIndex goal={startGoal} 
                      height={startHeight} 
                      currentWeight={startWeight} 
                      lastMeasure={lastMeasure} 
                      {...props}/>) } 
      />
      
      <Route path='/chart' render = {(props)=>(
        <Chart />
      )} />

      <Route path='/history' render = {(props) =>(
         <History history={achievement} 
                  startWeight={startWeight}/>) } 
      />
        
    </Switch>



    {startModal && <ModalStartPage getStart={this.getStartParams} close={this.closeStartModal} val={startData}/>}
    <AddNewData close={this.toggleAddNewData} 
                isShow={addNewData}
                getNewData={this.wrightAchieve}
                wrightNewData={this.wrightToHallofFame}
                val={updateData}/>
    </div>
  );
  }
}

export default App;
