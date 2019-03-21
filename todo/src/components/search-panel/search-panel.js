import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

state = {
  term: ''
}

//  1. отслеживаем изменение в инпуте 
//  2. обновляем STATE
//  3. вызываем onSearchChange которая спущена с props и передаст значение вверх 
changeTerm = (e)=>{
  const term =  e.target.value;
  this.setState({ term });
  this.props.onSearchChange(term); 
}

  render (){ 

    return (
      <input  type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={this.changeTerm}
              value={this.state.term}
      />
    );


  }
 
};

 
