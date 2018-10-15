import React, { Component } from 'react';

export default class UserSignInUp extends Component {


  state = {
      username: "",
      password: "",
      currentUser: {}
    };
  componentDidMount() {
    const token = localStorage.token;
    fetch("http://localhost:3000/avi/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      if (!data.error) {
        this.setState({
          currentUser: data
        });
      }
    });
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
          currentUser: data.user
        });
      } else {
        this.setState({
          loginError: data.error
        });
      }
    });
  };
  render() {
    const style = { border: "1px solid green", padding: "1rem", margin: "1rem" }
    return (
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
        <div>
          {this.state.currentUser.id ? (
            <h1>Hello {this.state.currentUser.username}!</h1>
          ) : <h1>Please Sign In</h1>}

        </div>

      </div>

    )
  }

}
