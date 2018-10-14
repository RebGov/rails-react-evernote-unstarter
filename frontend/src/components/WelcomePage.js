import React, { Component } from 'react';
import '../App.css';

export default class WelcomePage extends Component {

  render () {
    const style = { border: "1px solid green", padding: "1rem", margin: "1rem" };
    return (
      <div style={style}>
        <h1>Hello WelcomePage!</h1>
      </div>
    )
  }
}
