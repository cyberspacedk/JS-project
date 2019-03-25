import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormFields from '../../UI/FormFields'
import {validate} from '../../UI/misc';
import {firebasePromotions} from '../../../firebase';

export default class Enroll extends Component {

  state = {
    formError:false,
    formSuccess:'',
    formdata:{
        email:{
            element:'input',
            value:'',
            config:{
                name:'email_input',
                type: 'email',
                placeholder: 'Enter your email'
            },
            validation:{
                required: true,
                email: true
            },
            valid: false,
            validationMessage:''
        }
    }

}

updateForm(element){
    const newFormdata = {...this.state.formdata}
    const newElement = { ...newFormdata[element.id]}

    newElement.value = element.event.target.value;

    let validData = validate(newElement)
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement; 
    console.log(newFormdata);
    this.setState({
        formError: false,
        formdata: newFormdata
    })
}

resetFormSucces(type){
  const _newFormData = {...this.state.formdata};

  for (let key in _newFormData){
    _newFormData[key].value = '';
    _newFormData[key].valid = '';
    _newFormData[key].validationMessage = '';
  }

  this.setState({
    formError: false,
    formdata: _newFormData,
    formSuccess: type ? 'Congratulations' : 'Already in Database', 
  })

// call hiding message
  this.succesMessage()
}

// hide success message after 2s
succesMessage(){
  setTimeout(()=>{
    this.setState({
      formSuccess: ''
    })
  }, 2000)
}

submitForm(event){
  event.preventDefault();
  
  let dataToSubmit = {};
  let formIsValid = true;

  for(let key in this.state.formdata){
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
  }

  if(formIsValid){
    firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email)
    .once('value').then((snapshot)=> {
     if(snapshot.val()=== null){
       firebasePromotions.push(dataToSubmit);
       this.resetFormSucces(true);
     }else {
        this.resetFormSucces(false);
     }
    })


      
     
  } else {
     this.setState({
       formError : true,
     })
}
}
render() {
  return (
      <Fade>
          <div className="enroll_wrapper">
              <form onSubmit={ (event)=> this.submitForm(event)}>
                  <div className="enroll_title">
                      Enter your email
                  </div>
                  <div className="enroll_input">
                      <FormFields
                          id={'email'}
                          formdata={this.state.formdata.email}
                          change={(element)=> this.updateForm(element)}
                      />

                      { this.state.formError ? 
                          <div className="error_label">Something is wrong, try again.</div>
                          :null
                      }
                      <div className="success_label">{this.state.formSuccess}</div>
                      <button onClick={(event)=> this.submitForm(event)}>Enroll</button>
                    
                  </div>
              </form>
          </div>
      </Fade>
  );
}
} 
 