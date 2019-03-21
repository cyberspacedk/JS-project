import React, {Component} from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component{ 

 state = {
    label: ''
 };
 
 onInputChange = (e)=>{
    this.setState( {
        label: e.target.value
    } );
 };
 
 formSubmit = (e) =>{
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState( {
        label: ''
    } )
 };

 render(){

   return ( 
     <form className ='item-add-form d-flex'
           onSubmit = {this.formSubmit}
     >
     <input type="text"
            className="form-control"
            placeholder="What is to be done ?"
            onChange={this.onInputChange}
            value={this.state.label}
     />
     <button className='btn btn-outline-secondary'> Add Item </button>
     </form>

        )
    }
}