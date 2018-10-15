import React, { Component } from 'react';

//header always shows (with buttons for sign-in/sign-up options)
export default class Header extends Component {

  render () {
    const style = { border: "1px solid blue", padding: "1rem" };
    return (
      <div className="App-header" style={style}>
        <h1>Hello Header!</h1>

      </div>
    )
  }
}
