import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import UserSignInUp from './components/UserSignInUp'


class App extends Component {
  state = {
    AllNotes: {},
    currentNote: {}
  }




  render() {
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        <Header />
        <UserSignInUp />


      </div>
    );
  }
}

export default App;
