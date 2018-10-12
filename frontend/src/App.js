import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
// import { connect } from 'react-redux';

class App extends Component {
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
    const style = { border: "1px solid red", padding: "1rem", margin: "1rem" };
    return (
      <div className="App">
        <Header />
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
        <header className="App-header">
          {this.state.currentUser.id ? (
            <h1>Hello {this.state.currentUser.username}</h1>
          ) : null}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

      </div>
    );
  }
}
//redux-react
// mapStateToProps = (state) => {
//
// }
// mapDispatchToProps = (dispatch) => {
//   return {}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
