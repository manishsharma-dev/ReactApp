import React, { Component } from 'react';
import './App.css';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';



class App extends Component {
  state = {
    ninjas : [
        {name : 'Light', age : 21, skill : 'Tennis', id : 1},
        {name : 'Ryujaki', age : 26, skill : 'Soccer', id : 2},
        {name : 'ruyga', age : 34, skill : 'Golf', id : 3}
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>My First React App</h1>
      <p>Welcome</p>
      <Ninjas ninjas={this.state.ninjas} />
      <AddNinja />
      </div>
    )
  }
}

export default App;
