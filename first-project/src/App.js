import React, { Component } from 'react';
import UInput from './UserInput/UserInput';
import UOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [
      {username: 'Jared'},
      {username: 'Jessie'},
      {username: 'Nugget'}
    ]
  }

  addExclamationHandler = (newName) =>{
    this.setState({users: [
        {username: newName},
        {username: 'Jessie!'},
        {username: 'Nugget!'}
      ]}
    )
  }

  addChangeHandler = (event) =>{
    this.setState({users: [
        {username: event.target.value},
        {username: event.target.value},
        {username: event.target.value}
      ]}
    )
    console.log(event.target.value)
  }


  render() {
    return (
      <div className="App">
        <UOutput
        click = {this.addExclamationHandler.bind(this, 'Jared!')}
        username = {this.state.users[0].username}
        />
        <UOutput
        click = {this.addExclamationHandler}
        username = {this.state.users[1].username}
        />
        <UOutput
        click = {this.addExclamationHandler}
        username = {this.state.users[2].username}
        />
        <UInput
        changed = {this.addChangeHandler}
        username ={this.state.users[2].username}
        />
      </div>
    );
  }
}

export default App;
