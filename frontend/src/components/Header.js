import React, { Component } from 'react';

export default class Header extends Component {

  render () {
    const style = { border: "1px solid blue", padding: "1rem", margin: "1rem" };
    return (
      <div className="App-header" style={style}>
        <h1>Hello Header!</h1>
      </div>
    )
  }
}
