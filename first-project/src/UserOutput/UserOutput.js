import React from 'react';
import './UserOutput.css'

const UOutput = (props) => {

  return(
    <div onClick = {props.click}>
      <p className = 'green'> Hello {props.username} This is a paragraph that I am hoping will show up properly</p>
      <p className = 'red'> {props.username}, I really hope you have a fun time learning react</p>
    </div>
  );

};


export default UOutput;
