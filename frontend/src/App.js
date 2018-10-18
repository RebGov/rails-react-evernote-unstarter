import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import AllNotes from './containers/AllNotes'
import NotePage from './components/NotePage';

export default class App extends Component {
  state = {
    currentUser: {
      notes: []
    },
    userSignedIn: false,
  }

  componentDidMount() {
    this.getUser()
  }

  getUser(){
    const token = localStorage.token;
    if(token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (!data.error) {
            this.setState({
              currentUser: data,
              userSignedIn: true
            });
          }
        });
    } //render welcome page here?
  }

  logInApp = data => {
    if (!data.error) {
      localStorage.token = data.token;
      this.getUser()
    } else {
      this.setState({
        loginError: data.error
      });
    }
  };

  signUpApp = data => {
    if (!data.error){
      localStorage.token = data.token;
      this.getUser()
    } else {
      this.setState({
        loginError: data.error
      })
    }
  }
  render() {
    // console.log("appPage get userNotes", this.getUserNotes())
     console.log("AppPage - Signed in: ", this.state.userSignedIn, this.state.currentUser.notes)
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        <Header
          userSignedIn={this.state.userSignedIn}
          username={this.state.currentUser.username}
        />
        <UserSignIn logInApp={this.logInApp}/>
        <UserSignUp signUpApp={this.signUpApp}/>
        <div className="Note-container">
          <AllNotes
            userSignedIn={this.state.userSignedIn}
            currentUser={this.state.currentUser}
            userNotes={this.state.currentUser.notes}
          />
          <NotePage />
        </div>
        <div>
          {this.state.userSignedIn ? (
            <h1>Hello {this.state.currentUser.username}!</h1>
          ) : null}
        </div>
        <Router>

        </Router>

      </div>
    );
  }
}
