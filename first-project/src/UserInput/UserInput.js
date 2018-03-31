import React from 'react';
import './UserInput.css'

const UInput = (props)=> {
  return(
  <input type = "text" onChange = {props.changed} value = {props.username}/>
  );
};



export default UInput;
