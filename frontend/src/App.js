import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import UserSignInUp from './components/UserSignInUp'


export default class App extends Component {
  state = {
    username: "",
    password: "",
    currentUser: {},
    userSignedIn: false
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
