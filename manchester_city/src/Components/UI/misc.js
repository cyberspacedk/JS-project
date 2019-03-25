import React from "react";
import { Link } from "react-router-dom";

export const Tag = (props) => {

  const template = 
  <div style={{
    background:props.bck,
    fontSize: props.size,
    margin:props.margin,
    padding: '5px 10px',
    display:'inline-block',
    fontFamily:'Righteous',
    border: props.border,
    color:props.color }}
    {...props.style}>
    {props.children}
    </div>;

  // return linked text or simple text 
  if (props.linkto) {
    return <Link to={props.linkto}>{template}</Link>
  } else {
    return template;
  } 
};


export const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((elem)=>{
    data.push({
      ...elem.val(),
      id: elem.key
    })
  });
  return data
}

export const reverseArray = (actualArray)=> {
  let reversedArray = [];
  for (let i=actualArray.length-1; i>=0; i--){
    reversedArray.push(actualArray[i])
  }
  return reversedArray;
}

export const validate = (element)=> {
  let error = [true, ''];

  if(element.validation.email){
    const valid = /\S+@\S+\.\S+/.test(element.value)
    const message = `${!valid ? 'Must be a valid email': ''}`;
    error = !valid ? [valid, message] : error;
  }

  if(element.validation.required){
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'this field is required' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
}