import React, { Component } from "react";
import FormFields from "../UI/FormFields";
import { validate } from "../UI/misc";
import { firebase } from "../../firebase";

export default class Signin extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;
    console.log(newFormdata);
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    // check if User is auth
    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => this.props.history.push('/dashboard'))
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div
          className="signin_wrapper"
          style={{
            margin: "100px"
          }}
        >
          <form onSubmit={e => this.submitForm(e)}>
            <h2>Please login </h2>

            <FormFields
              id={"email"}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />

            <FormFields
              id={"password"}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? 
              (<div className="error_label">Something is wrong, try again.</div>) 
              : null}
            <button onClick={event => this.submitForm(event)}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}
