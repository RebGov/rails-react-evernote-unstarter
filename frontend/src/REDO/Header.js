// import React, { Component } from 'react';
// import MenuBar from '../containers/MenuBar.js'

export default class Header extends Component {

  render () {
    const style = { border: "1px solid blue", padding: "1rem", margin: "1rem" };
    return (
      <div style={style} className="header">
        <h1>Hello Header!</h1>

        <MenuBar className="menuBar"/>


      </div>
    )
  }
}
