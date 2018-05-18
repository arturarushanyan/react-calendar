import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar'

const style = {
  position: "relative",
    margin: "50px auto"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar style = {style} width="302px"/>
      </div>
    );
  }
}

export default App;
