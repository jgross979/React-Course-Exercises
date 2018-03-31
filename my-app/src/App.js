import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    people: [
      {name: 'Jared', age: 24},
      {name: 'Jessie', age: 25},
      {name: 'Greg', age: 35},
      {name: 'Freida', age: 87}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    // NOOOO this.state.people.person[0].name = 'Maximilian';
    this.setState({people: [
      {name: newName, age: 27},
      {name: 'Jessie', age: 25},
      {name: 'Greg', age: 22},
      {name: 'Freida', age: 107}
    ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({people: [
      {name: 'Jared', age: 27},
      {name: event.target.value, age: 25},
      {name: 'Greg', age: 22},
      {name: 'Freida', age: 107}
    ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'purple',
      color: 'green',
      width: '145px',
      height: '100px',
      border: '2px solid yellow'
    };
    
    return (
      <div className = "App">
        <h1>I am  a react app!</h1>
        <p>This is working!</p>
        <button
        style = {style}
        onClick= {this.switchNameHandler}>Switch Name</button>
        <Person
         name = {this.state.people[0].name}
         age = {this.state.people[0].age}/>
        <Person
         name = {this.state.people[1].name}
         age = {this.state.people[1].age}
         click = {this.switchNameHandler.bind(this, 'Max')}
         changed={this.nameChangedHandler}/>
        <Person
         name = {this.state.people[2].name}
         age = {this.state.people[2].age}>My Hobbies: piano</Person>
        <Person
         name = {this.state.people[3].name}
         age = {this.state.people[3].age}/>
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
