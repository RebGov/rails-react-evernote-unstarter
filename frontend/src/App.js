import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import NotesLeftSide from './components/NotesLeftSide.js'
// import Search from "./components/Search";


class App extends Component {

  render() {
    const style = { border: "3px dotted black", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        Hello App.js
        <Header />
        <NotesLeftSide />
        <WelcomePage />

      </div>
    );
  }
}

export default App;
