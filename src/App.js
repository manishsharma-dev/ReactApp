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

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
     let ninjas = this.state.ninjas.filter((ninja) =>{
       return ninja.id !== id
     });
     this.setState({
       ninjas : ninjas
     })
  }

  render() {
    return (
      <div className="App">
      <h1>My First React App</h1>
      <p>Welcome</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;
