import React, { Component } from 'react'
import { firebase, firebaseMatches} from '../../../firebase'
import {firebaseLooper,reverseArray} from '../../UI/misc';
import MatchesBlock from '../../UI/MatchesBlock.jsx';

import Slide from 'react-reveal/Slide'


export default class Blocks extends Component {

state = {
  matches: []
}
componentDidMount = () => {
  firebaseMatches.limitToLast(6).once('value')
  .then(snapshot => {
    const matches = firebaseLooper(snapshot); 
    this.setState({
      matches : reverseArray(matches),
    }) 
  })
}

showMatches = (matches) => (
  matches ? 
  matches.map(elem=>(
    <Slide bottom key={elem.id}>
      <div className="item">
        <div className="wrapper">
          <MatchesBlock match={elem}/>
        </div>
      </div>
    </Slide>
    
  ))
  : null
  
)


  render() {


    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    )
  }
}
