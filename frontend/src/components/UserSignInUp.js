import React, { Component } from 'react';
import AllNotes from './AllNotes'

export default class UserSignInUp extends Component {
  state = {
      username: "",
      password: "",
      currentUser: {},
      signedIn: false
    };

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
            signedIn: true
          });
        }
      });
  }
  getUserNotes() {
    if (this.state.signedIn === true) {
      console.log(this.state.currentUser.notes)
    }
    console.log("sign in")
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  logIn = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          localStorage.token = data.token;
          this.setState({
            currentUser: data.user,
            signedIn: true
          });
        } else {
          this.setState({
            loginError: data.error
          });
        }
      });
  };
  // getUserNotes = () => {
  //   return this.state.currentUser.notes.map(note => {
  //     const title = note.title
  //     const location = note.location
  //     const content = note.content
  //   })
  // }
  render () {
    console.log(this.getUserNotes(), this.state.signedIn)
    const style = { border: "1px solid green", padding: "1rem", margin: "1rem" };
    return (
      <div>
      <div style={style}>
        <form onSubmit={this.logIn}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="username"
            name="username"
          />
          <input
            type="password"
            onChange={this.handleChange}
            placeholder="password"
            name="password"
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {this.state.signedIn ? (
          <h1>Hello {this.state.currentUser.username}!</h1>
        ) : null}
      </div>
    <AllNotes userNotes={this.getUserNotes} />

    </div>
    )
  }
}
