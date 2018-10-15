import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import UserSignIn from './components/UserSignIn';
import AllNotes from './components/AllNotes'
import NotePage from './components/NotePage';

export default class App extends Component {
  state = {
    currentUser: {},
    userSignedIn: false
  }

  componentDidMount() {
    const token = localStorage.token;
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
  }
logInApp = data => {
  if (!data.error) {
    localStorage.token = data.token;
    this.setState({
      currentUser: data.user,
      userSignedIn: true
    });

  } else {
    this.setState({
      loginError: data.error
    });
  }
};


  render() {
    console.log(this.state.userSignedIn, this.state.currentUser.notes)
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App" style={style}>
        <Header />
        <UserSignIn logInApp={this.logInApp}/>
        <div className="Note-container">
          <AllNotes  />
          <NotePage />
        </div>
        <div>
          {this.state.userSignedIn ? (
            <h1>Hello {this.state.currentUser.username}!</h1>
          ) : null}
        </div>


      </div>
    );
  }
}
